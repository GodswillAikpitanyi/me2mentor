import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <>
      <NavBar />
          <div className="p-30 bg-service bg-black ">
            Services
          </div>
					<div className="py-5 pt-30 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-0 pt-20 rounded-md shadow-md mb-5 md:mb-0">
             <img src='./pic-01.png'/>
             <h1>Entrepreneurship</h1>
             <img src='./pic-01.png'/>
             <h1>Arts and Creativity</h1>
					</div>
          <div className="py-5 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-0 pt-5 rounded-md shadow-md mb-5 md:mb-0">
            <img src='./pic-01.png'/>
              <h1>Technology and Innovation</h1>
              <img src='./pic-01.png'/>
              <h1>Healthcare</h1>      
          </div>
          <div className="py-5 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-0 pt-5 rounded-md shadow-md mb-5 md:mb-0">
             <img src='./pic-01.png'/>
             <h1>Banking & Finance</h1>
             <img src='./pic-01.png'/>
             <h1>Agriculture</h1>
					</div>
          <Footer />
    </>
  )
}

export default Services