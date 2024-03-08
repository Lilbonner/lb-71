import React from 'react';
import {Link} from "react-router-dom";

const Admin: React.FC = () => {
    return (
        <div>
            <div className="flex bg-blue-300 text-white h-14 justify-between px-4 items-center">
                <h2 className="text-4xl ml-16 mt-1">Turtle pizza admin</h2>
                <div className="text-2xl mr-11 flex ">
                    <Link to="/admin/list" className="mr-10">Dishes</Link>
                    <p className="mr-10">|</p>
                    <Link to="admin/form">Orders</Link>
                </div>
            </div>
        </div>
    );
};

export default Admin;