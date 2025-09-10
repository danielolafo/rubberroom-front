import { useEffect, useState } from "react";
import Login from '../Login/Login';
import axios from "axios";

function Dashboard() {
    const token = sessionStorage.getItem('token');
    console.log('token ', token);
    if (token == null && token == undefined) {
        return <Login />;

    } else {
        return <MainDashboard />;
    }
}

function MainDashboard() {

    const [allocations, setAllocations] = useState([]);


    const get_allocations = async () => {
        axios.get("http://localhost:8000/allocation?city=Madrid&pageSize=5&page=1", [])
            .then((response) => {
                console.log(response);
                setAllocations(response.data);
            }).catch(error => {
                console.log('Error');
                setAllocations([]);
            });
    }

    useEffect(() => {
        get_allocations();
    }, [])


    return (
        allocations.length > 0 ?
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allocations.map((row, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{row.city}</td>
                            <td>{row.address}</td>
                            <td><button>Reserve</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            :
            <div>
                No data found
            </div>
    );
}

export default Dashboard;