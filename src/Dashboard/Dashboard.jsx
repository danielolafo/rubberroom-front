import { useState } from "react";
import Login from  '../Login/Login';

function Dashboard() {
    const token = sessionStorage.getItem('token');
    console.log('Debuggin ',token);
    if(token==null && token==undefined){
        return <Login />;
           
    }else{
        return <MainDashboard />;
    }
}

function MainDashboard(){
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default Dashboard;