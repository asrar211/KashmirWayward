import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Package from "./pages/Package";
import Booking from "./pages/Booking";
import Layout from './components/Layout/Layout';


function App() {


  return (
    <Router>
      <Layout>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/package/:id' element={<Package/>}/>
      <Route path='/booking' element={<Booking/>}/>
     </Routes>
     </Layout>
    </Router>
  )
}

export default App
