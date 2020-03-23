import React from 'react';
import {auth} from '../firebase.js';


function Dashboard(props) {
    
    const userEmail = () => {
        if (auth.currentUser != null){
            return auth.currentUser.email;
        }
        else{
            return "Unsigned User";
        }
    }

            return(
                <div className="d-flex justify-content-center"> 
                    <div className="sidebar col-md-2 mr-auto">
                    
                        <div className="row">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fa fa-user text-light fa-lg mr-3"></i>{userEmail()}</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fa fa-home text-light fa-lg mr-3"></i>Account Settings</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>Activity</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>My Purchases</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>My Wishlist</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                                <li className="nav-item"><a className="nav-link text-white p-3 mb-2 sidebar-link text-md-left"><i className="fa fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div> 
            );
        }

export default Dashboard;