import NavBar from "../components/NavBar"

const About = () => {
  return (
    <>
      <NavBar />
      <div className="p-40 gap-8 font-bold">
        <img src="./pic-05.png"/>
        <h1 className="font-bold text-5xl text-blue-900 inline-flex">Our Mission</h1>
        <p className="text-bold">Welcome to Me2Mentor, where mentorship meets excellence. Our mission is to empower individuals from all walks of life to achieve their full potential and thrive in their chosen fields. We believe that mentorship is the key to unlocking greatness, and our platform connects you with experienced mentors who are passionate about sharing their knowledge and guiding you on your journey to success.</p>
      </div>
      <div>
        <p className="font-bold text-3xl text-blue-900">Why Me2Mentor?</p>

        <p className="flex "> At Me2Mentor, we take pride in offering mentorship opportunities across a wide range of sectors and industries. Here's what sets us apart:</p>
        <img src="./pic-02.png"/>
      </div>
    
    </>
  )
}

export default About