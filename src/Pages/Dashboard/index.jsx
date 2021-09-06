import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Link to="/algo" >To Algo</Link>
        </div>
    )
}

export default Dashboard;