import React from 'react';
import PostProducts from './PostProducts';

const Dashboard = () => {
    return (
        <div className='p-5'>
            <h2 className='fw-bold my-5 bg-warning py-2 px-3'>DashBoard</h2>
            <PostProducts />
        </div>
    );
};

export default Dashboard;