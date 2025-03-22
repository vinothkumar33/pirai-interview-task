
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    const navigate = useNavigate();

    let token = localStorage.getItem("access-token");

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token])

    return (
        <>
            <Container fluid className="main">
                <div className='box-shadow p-3'>
                    <h2>Wellcome back, admin</h2>
                    <p>Here's what's happening with your app today.</p>
                </div>
                <div className='d-flex flex-wrap gap-3 mt-5'>
                    <Col lg={3} className='box-shadow p-2 px-3'>
                        <h6>Total Users</h6>
                        <h2>1,123</h2>
                        <p>+20.1% from last month</p>
                    </Col>
                    <Col lg={3} className='box-shadow p-2 px-3'>
                        <h6>Total Users</h6>
                        <h2>1,123</h2>
                        <p>+20.1% from last month</p>
                    </Col>
                    <Col lg={3} className='box-shadow p-2 px-3'>
                        <h6>Total Users</h6>
                        <h2>1,123</h2>
                        <p>+20.1% from last month</p>
                    </Col>
                    <Col lg={3} className='box-shadow p-2 px-3'>
                        <h6>Total Users</h6>
                        <h2>1,123</h2>
                        <p>+20.1% from last month</p>
                    </Col>
                </div>
            </Container>
        </>
    )
}

export default Dashboard;