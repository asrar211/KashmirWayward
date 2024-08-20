import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import HomePage from "./Pages/HomePage"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
