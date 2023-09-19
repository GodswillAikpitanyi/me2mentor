import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <>
      <NavBar />
          <div className="p-30">
            Services
          </div>
					<div className="py-5 pt-30 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-0 pt-20 rounded-md shadow-md mb-5 md:mb-0">
             <img src='./entrepreneur.jpg'/>
             <div className="text-blue-900">
              <h1 className="font-extrabold">Entrepreneurship</h1>
              <p>The world of entrepreneurship is akin to embarking on a daring expedition into uncharted territory. It's a transformative journey filled with uncertainty, risk, and boundless potential, and mentorship is the compass that guides aspiring entrepreneurs along this exhilarating path. Entrepreneurship is a continual process of problem-solving and adaptation</p>
             </div>
             <img src='./arts.jpg'/>
             <div className="text-blue-900">
              <h1 className="font-extrabold">Art and Creativity</h1>
              <p>Art and creativity are boundless, and building a career in this realm means unleashing your creative potential. It's a journey where blank canvases, empty pages, and silent stages become a playground for your imagination to run wild. It's an invitation to paint, write, sing, dance, and create with abandon.</p>
             </div>
					</div>

          <div className="py-5 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-0 pt-5 rounded-md shadow-md mb-5 md:mb-0">
            <img src='./technology.png'/>
            <div>
              <div className="text-blue-900">
              <h1 className="font-extrabold">Technology and Innovation</h1>
              <p>Tech isn't confined to a single path. It's a mosaic of career opportunities, from software development and cybersecurity to product management and data science. It allows you to explore diverse roles and find the niche that resonates with your passion and skills. The tech industry offers a fertile ground for innovation and entrepreneurship.</p>
              </div>
            </div>     
              <img src='./health.jpg'/>
              <div className="text-blue-900">
                <h1 className="font-extrabold">Healthcare</h1>
                <p>Healthcare is rife with complex problems and ethical dilemmas. Mentors provide valuable guidance on critical thinking, decision-making, and ethical considerations. They offer insights into navigating challenging situations while upholding the highest ethical standards.</p>     
              </div>
          </div>

          <div className="py-5 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-0 pt-5 rounded-md shadow-md mb-5 md:mb-0">
             <img src='./finance.jpg'/>
             <div className="text-blue-900">
              <h1 className="font-extrabold">Finance Management</h1>
              <p>Financial management is more than a career choice; it's a calling to manage resources wisely, fiscal stewardship, and secure financial futures. Getting into this world means embracing financial acumen, analytical thinking, and a commitment to the prudent allocation of assets. Mentors, with their seasoned experience, offer invaluable insights to help shape your financial acumen. </p>
             </div>
             <img src='./agric.jpg'/>
             <div className="text-blue-900">
              <h1 className="font-extrabold">Agriculture</h1>
              <p>In a world where the pace of life seems to quicken each day, an increasing number of individuals are discovering the profound rewards of agriculture. This shift, from urban or corporate environments to the fertile fields of agriculture, represents not just a change in career but a transformative lifestyle choice. Agriculture is more than just a profession; it's a connection to the very essence of life—the soil.</p>
            </div>
          </div>
          <Footer />
    </>
  )
}

export default Services