import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
function Room_Search() {
    const params = useParams();

    const Hotels=()=>{
        axios.post(`http://localhost:5000/room/place/${(params.place).toUpperCase().replace(/ /g,'')}`).then((response)=>{
            return (
                <div>
                  <h1>{JSON.stringify(response)}</h1>
                </div>
              )
        }).catch(()=>{
            return (
                <h1>Error</h1>
            )
        })
      
      }
  return (
    <div>Room_Search {(params.place).toUpperCase().replace(/ /g,'')}
    <Hotels />
    </div>
    
  )
}

export default Room_Search