import "./user.css";
import axios from 'axios';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import { Container, Row, Col } from 'react-bootstrap';

const PostTable = () => {
    const navigate = useNavigate();

    let token = localStorage.getItem("access-token");

    useEffect(() => {
        if(!token){
            navigate("/");
        }
    }, [token])

    const [postDetails, setPostDetails] = useState(null);

    const getData = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`,
                { headers: headers });
            if (response.status === 200 || response.status === 201) {
                console.log("data", response);
                setPostDetails(response?.data)

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(postDetails);

    return (
        <>
            <Container fluid className="main">
                    <div className="main-header grid pb-3">
                        <h1>Posts</h1>

                    </div>
                    <div className="card">
                        <table>
                            <tbody>
                                {postDetails?.map((user, i) => (
                                    <tr key={user.id}>
                                        <td>{i + 1}</td>
                                        <td>{user.title}</td>
                                        <td>{user.body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </Container>
        </>
    );
};

export default PostTable;
