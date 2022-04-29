import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Blog.css';


const Blog = () => {
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            navigate("/..")
        }
    }, [])


    return (
        <div className="blogMain">
            <Link to='createpost'>
                <Button>Create Post</Button>
            </Link>
            <Link to='posts'>
                <Button>View Post</Button>
            </Link>
        </div>
    )
}

export default Blog
