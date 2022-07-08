import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetchAll(){
    const [allData,setAllData] = useState({res:'none'});
    const [allLoaded,setAllLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:5000/room/find').then((response)=>{
            setAllData(response)
            setAllLoaded(true)
        }).catch((err)=>{
            setResponse(err);
            
        })
    },[])
return [allData,allLoaded]
}