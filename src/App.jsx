
import logo from './logo.svg'
import './App.css'
import Home from './Components/Home'
import Rooms from './Components/Rooms'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import Room_Details from './Components/Hotel/Room_Details';
import Room_Search from './Components/Hotel/Room_Search';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/roomDetails" element={<Room_Details />} />
        <Route path="/hotels/place" element={<Room_Search />} />
     
     
    <Route path="/Rooms/" element={<Rooms />} />
    <Route exact path="/place/:place" element={<Room_Search />} />
    </Routes>
     

    </div>
    </BrowserRouter>
  )
}

export default App
