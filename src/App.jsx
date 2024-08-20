import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import HomePage from "./Pages/HomePage"
import Destinations from './Pages/Destinations'
import ContactUs from './Pages/ContactUs'
import PackageDetail from './Pages/PackageDetail'
import AllPackages from './Pages/AllPackages'


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/destinations' element={<Destinations/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/package/:id' element={<PackageDetail/>}/>
          <Route path='/packages' element={<AllPackages/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
