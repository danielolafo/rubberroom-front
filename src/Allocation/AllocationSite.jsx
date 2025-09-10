import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AllocationSite(allocationId){

    const [allocation, setAllocation] = useState(null);
    const location = useLocation();
        const {id} = location.state;
    
    const getAllocationDetail = async () => {
        console.log("State data ", id);
        console.log('allocationdetail Id ', allocationId);
        axios.get("http://localhost:8000/allocation/"+id, [])
            .then((response) => {
                console.log(response);
                setAllocation(response.data);
            }).catch(error => {
                console.log('Error');
                setAllocation(null);
            });
    }

    useEffect(() => {
        getAllocationDetail();
    }, []);

    return (
        <div>
            <input type="text" disabled />
            <input type="text" disabled />
        </div>
    );
}

export default AllocationSite;