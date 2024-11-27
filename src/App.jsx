import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import MakeAppointment from "./Components/MakeAppointmnet"
import Services from "./Components/Services/Services"
import Testimonial from "./Components/Testimonial/Testimonial"
import Treatment from "./Components/Treatment"


function App() {
 
  return (
    <>
     <Navbar/>
     <Banner/>
     <Services/>
     <Treatment/>
     <MakeAppointment/>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default App
