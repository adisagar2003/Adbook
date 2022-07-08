import React,{useState} from 'react'
import "./Room_Checkout.css"
import store from '../../store';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
function mapStateToProps(state){
return state;
}
function Room_Checkout(props) {
    const [logged,setLogged]= useState(store.getState().logged);


  return (
    <div className='Room_Checkout'>
    <div className='Room_Checkout__layout' style={{padding:10,display:'flex',justifyContent:'space-around'}}>
        <h4 style={{padding:8,borderRadius:10,backgroundColor:'white',marginRight:'auto'}}>{props.name}</h4>
<div style={{marginRight:'auto',padding:20,overflow:'hidden'}}>

<img src={props.photos} height={100}  width={200}/>
</div>
<div style={{padding:30,borderRadius:20,backgroundColor:'lightgreen',color:'white',fontWeight:600}}>Price ${props.price}</div>

        </div>
        <button style={{padding:20,borderRadius:20,backgroundColor:'green',color:'white',fontWeight:600,border:'none'}}>{logged?<Link to='/checkout'>Checkout</Link>:<Link style={{textDecoration:'none',color:'white'}} to='/signIn'>SignIn to pay</Link>}</button>
       
        </div>
  )
}

export default connect(mapStateToProps)(Room_Checkout)