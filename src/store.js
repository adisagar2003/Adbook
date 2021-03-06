import { createStore } from 'redux';


function loginReducer(state={user:null,
cookie:null,logged:false,isAdmin:false},action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            
            return {user:action.payload.user,
            cookie:action.payload.cookie,
        logged:true,isAdmin:action.payload.admin}

        case 'LOGOUT_SUCCESS':
            return {user:null,
            cookie:null,
        logged:false}
        default:
            return state
    }
}

let store = createStore(loginReducer);

export default store