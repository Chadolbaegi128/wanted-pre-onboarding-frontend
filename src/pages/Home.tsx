import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    

    return (
    <>
        <ul>
            <li>Home</li>
            <li><Link to='/todo'>투두 리스트</Link></li>
        </ul>        
    </>
    )
}

export default Home;