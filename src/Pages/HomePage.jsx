import Destinations from '../Components/HomePage/Destinations'
import Gallery from '../Components/HomePage/Gallery'
import Hero from '../Components/HomePage/Hero'
import Packages from '../Components/HomePage/Packages'
import Plan from '../Components/HomePage/Plan'
import Reviews from '../Components/HomePage/Reviews'
import Vacation from '../Components/HomePage/Vacation'

const HomePage = () => {
  return (
    <>
    <Hero/>
     <Gallery/>
    <Plan/>
    <Packages/>
    <Vacation/>
    <Destinations/>
    <Reviews/> 
    </>
  )
}

export default HomePage