import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AllocationSite(allocationId){

    const [allocation, setAllocation] = useState({
        id:   '',
        city:  '',
        address: ''
    });
    const location = useLocation();
        const {id} = location.state;

    
    
    const getAllocationDetail = async () => {
        axios.get("http://localhost:8000/allocation/"+id, [])
            .then((response) => {
                setAllocation(response.data);
            }).catch(error => {
                setAllocation(null);
            });
    }

    useEffect(() => {
        getAllocationDetail();
    }, []);

    return (
        <>
        <div>
            <input type="text" disabled value={allocation.city}/>
        </div>
        <div>
            <input type="text" disabled value={allocation.address} />
        </div>
        </>
    );
}

export default AllocationSite;