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
    }, []);

    const handleReserve=()=>{
        console.log('Handle reserve');
    }


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
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.city}</td>
                            <td>{row.address}</td>
                            <td>
                                <button style={{width:'30px'}} onClick={handleReserve}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                </button>
                            </td>
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

function ReserveButton({allocation}){
    const handleReserve=()=>{
        console.log('Handle reserve');
    }

        if(allocation.state=='A'){
            return
            <button style={{width:'30px'}} onClick={handleReserve}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        }else{
            return <></>
        }

}

export default Dashboard;