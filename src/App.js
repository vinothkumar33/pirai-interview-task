import './App.css';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import { useState } from "react";

import Login from '../src/jsx/page/login';
import Navbar from '../src/jsx/layout/Navbar';
import SideBar from './jsx/layout/Sidebar';
import PostTable from './jsx/component/postList';
import Dashboard from './jsx/component/Dashboard';

const allroutes = [
  { url: "/dashboard", component: <Dashboard /> },
  { url: "/posts", component: <PostTable /> },
]

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const handleChangeSidebar = (value) => {
    setIsSideBarOpen(value);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route element={<MainLayout isSideBar={isSideBarOpen} handleChange={handleChangeSidebar} />} >
            {allroutes.map((data, i) => (

              <Route
                key={i}
                exact
                path={`${data.url}`}
                element={data.component}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}


function MainLayout({isSideBar, handleChange}) {
  return (
    <div id="main-wrapper">
      <Navbar isSideBar={isSideBar} handleChange={handleChange} />
      <SideBar isSideBar={isSideBar} handleChange={handleChange} />
      <div className="content-body" >
        <Outlet />
      </div>
    </div>
  )
};


export default App;
