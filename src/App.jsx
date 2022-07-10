
import logo from './logo.svg'
import './App.css'
import Home from './Components/Home'
import Rooms from './Components/Rooms'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import Room_Details from './Components/Hotel/Room_Details';
import Room_Search from './Components/Hotel/Room_Search';
import Navbar from './Components/Navbar/Navbar';
import Room_all from './Components/Hotel/Room_all';
import Register from './Components/Auth/Register';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
 
        <Route path="/hotels/place" element={<Room_Search />} />
     <Route path="/signIn" element={<SignIn />} />
        <Route path='/hotels' element={<Room_all />} />
    <Route path="/Rooms/" element={<Rooms />} />
    <Route exact path='/room/:id' element={<Room_Details />} />
    <Route exact path="/place/:place" element={<Room_Search />} />
    <Route exact path='/register' element={<Register />} />
    </Routes>
     

    </div>
    </BrowserRouter>
  )
}

export default App
