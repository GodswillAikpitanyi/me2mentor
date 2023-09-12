
const Hero = () => {
	return (
		<div className="p-8">
			<div className="p-16 bg-hero-pattern bg-no-repeat bg-cover h-[40rem] ">
				<h1 className="pt-16 font-bold text-6xl text-white border-spacing-2">Unlock your potential <br />and take charge of your future</h1>
				<p className="pt-8 text-white">Whether you're a mentor looking to inspire the next generation or a mentee seeking guidance, Me2Mentor is your path to success. <br />Join our community today and embark on a journey of growth, learning, and empowerment.</p>
			<div className="pt-8 flex gap-2 font-bold">
				<button className="bg-blue-900 hover:bg-yellow-300 rounded p-3 text-white">Become a Mentor</button>
				<button className="bg-yellow-300 rounded p-3 text-blue-900">Sign up as a Mentee</button>
			</div>	
			</div>
		</div>
	)
}

export default Hero