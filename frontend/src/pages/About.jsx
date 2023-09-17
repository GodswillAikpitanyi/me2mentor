import NavBar from "../components/NavBar"

const About = () => {
  return (
    <>
      <NavBar />
      <div className="p-40 gap-8 ">
        <img src="./pic-05.png"/>
        <h1 className="font-bold text-5xl text-blue-900 inline-flex py-3">Our Mission</h1>
        <p>Welcome to Me2Mentor, where mentorship meets excellence. Our mission is to empower individuals from all walks of life to achieve their full potential and thrive in their chosen fields. We believe that mentorship is the key to unlocking greatness, and our platform connects you with experienced mentors who are passionate about sharing their knowledge and guiding you on your journey to success.</p>
        <p className="font-bold text-2xl text-blue-900 py-3">Why Me2Mentor?</p>
        <p className="flex "> At Me2Mentor, we take pride in offering mentorship opportunities across a wide range of sectors and industries. Here's what sets us apart:</p>
        <h2 className="text-blue-900 font-bold pt-2">Holistic Growth</h2>
          <p>We believe that mentorship goes beyond career advancement. It's about personal growth, development, and self-discovery. Our mentors are here to support you not only in your professional journey but also in your personal growth and well-being.</p>
        <h2 className="text-blue-900 font-bold pt-2">Community and Support</h2>
          <p>When you join Me2Mentor, you become part of a vibrant and supportive community. Connect with fellow mentees, share experiences, and build lasting relationships that go beyond mentorship.</p>
        <h2 className="text-blue-900 font-bold pt-2">Our Commitment to Excellence</h2>
          <p>At Me2Mentor, excellence is at the core of what we do. We are committed to providing a platform where mentorship flourishes, knowledge is shared, and dreams are realized. Whether you're an aspiring professional looking to learn from the best or an experienced mentor eager to give back, Me2Mentor is your destination for growth and achievement.
        Join Me2Mentor today and take the first step toward achieving your goals. Discover the power of mentorship and unlock your true potential with us.
        We look forward to being a part of your success story.</p>
        <div className="flex pt-5">
        <img src="./pic-02.png"/>
        <img src='./pic-01.png'/>
        </div>
      </div>
    
    </>
  )
}

export default About