import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AllocationSite(allocationId){
    const base_path = process.env.BASE_PATH;
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
        <MediaData/>
        </>
    );
}

function AllocationInfo(){
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

function MediaData(){

    const [mediaData, setMediaData] = useState({
        id:   '',
        insert_date:  '',
        state: '',
        content: '',
        allocation_id: null
    });

    const getMediaData = async () => {
        axios.get("http://localhost:8000/media-data/"+22, [])
            .then((response) => {
                setMediaData(response.data[0]);
                setMediaData((prevValues)=>({
                    ...prevValues,
                    content:'data:image/png;base64,'+response.data[0]['content']
                }));
            }).catch(error => {
                setMediaData(null);
            });
    }

    useEffect(() => {
        getMediaData();
    }, []);

    return(
        <>
            <div>
                <img src={mediaData.content}></img>
            </div>
        </>
    );
}

export default AllocationSite;