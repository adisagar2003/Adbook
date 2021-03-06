import {useEffect, useState} from 'react';
import axios from 'axios';
export default function useFindHotelById(id){
    const [loaded,setLoaded] = useState(false);
    const [hotel,setHotel] = useState({hotel:'no'});
    
    useEffect(()=>{
        axios.get(`https://adbook-server.herokuapp.com/room/find/${id}`)
        .then((response)=>{
setHotel(response)
setLoaded(true);
        }).catch((err)=>{
            console.log('error')
            setHotel({error:err})
     console.log(err)
        })
    },[])

    return [hotel,loaded]
}