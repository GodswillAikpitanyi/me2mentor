import { FaHouseChimney } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const Mentors = () => {
	return (
		<div >
			<div className="py-10 px-10">
				<div className="text-center">
					<h2 className="md:text-4xl text-2xl text-blue-900 font-bold pb-3">Welcome to <span className="font-bold md:text-4xl">
						Me<span className="text-yellow-400 font-bold md:text-5xl">2</span>Mentor
					</span></h2>
					<p className="md:text-lg text-sm text-gray-600 font-semibold">A community that speedens your journey to growth, learning and empowerment.</p>
				</div>

				<div className="md:grid grid-cols-3 py-5 gap-6">
					<div className="flex gap-2">
						<div className="w-[100px] h-[50px] border border-yellow-400 flex justify-center items-center rounded-full" >
							<FaHouseChimney />
						</div>
						<div>
							<h3 className="text-blue-900 font-semibold text-xl">Personalized Mentorship Matching</h3>
							<p className="py-3 text-base text-gray-500 font-light">Finding the right mentor or mentee can be challenging. Me2Mentor takes the guesswork out of the equation.</p>
						</div>
					</div>

					<div className="flex gap-2">
						<div className="w-[100px] h-[50px] border border-yellow-400 flex justify-center items-center rounded-full" >
							<FaHouseChimney />
						</div>
						<div>
							<h3 className="text-blue-900 font-semibold text-xl">Diverse Network of Mentors</h3>
							<p className="py-3 text-base text-gray-500 font-light">Our extensive mentor network spans various industries, professions, and backgrounds. </p>
						</div>
					</div>

					<div className="flex gap-2">
						<div className="w-[100px] h-[50px] border border-yellow-400 flex justify-center items-center rounded-full" >
							<FaHouseChimney />
						</div>
						<div>
							<h3 className="text-blue-900 font-semibold text-xl"> Skill Enhancement and Career Advancement:</h3>
							<p className="py-3 text-base text-gray-500 font-light">With Me2Mentor, you will have access to mentors who can help you hone your skills, set and achieve career goals, and unlock new opportunities.</p>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[100px] h-[50px] border border-yellow-400 flex justify-center items-center rounded-full" >
							<FaHouseChimney />
						</div>
						<div>
							<h3 className="text-blue-900 font-semibold text-xl">Personalized Mentorship Matching</h3>
							<p className="py-3 text-base text-gray-500 font-light">Finding the right mentor or mentee can be challenging. Me2Mentor takes the guesswork out of the equation.</p>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[100px] h-[50px] border border-yellow-400 flex justify-center items-center rounded-full" >
							<FaHouseChimney />
						</div>
						<div>
							<h3 className="text-blue-900 font-semibold text-xl">Supportive Community</h3>
							<p className="py-3 text-base text-gray-500 font-light">Join a vibrant and supportive community of like-minded individuals. Connect with mentees and mentors who share your passion and commitment to growth.</p>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[100px] h-[50px] border border-yellow-400 flex justify-center items-center rounded-full" >
							<FaHouseChimney />
						</div>
						<div>
							<h3 className="text-blue-900 font-semibold text-xl"> Knowledge Sharing and Growth</h3>
							<p className="py-3 text-base text-gray-500 font-light">For mentors, Me2Mentor provides a platform to give back to the community and share their wealth of experience</p>
						</div>
					</div>
				</div>
			</div>


			<div className="md:flex justify-between bg-slate-300 px-10 py-10">
				<div>
					<p className="py-5 text-4xl font-bold">Join <span className="font-bold md:text-4xl">
						Me<span className="text-yellow-400 font-bold md:text-5xl">2</span>Mentor
					</span> in four easy steps</p>
					<div className="flex items-center gap-4">
						<IoIosArrowForward className='text-yellow-600 font-bold' />
						<p className="py-3"> <span className="font-semibold text-xl">Create a profile: </span>Sign up with your LinkedIn or email account.</p>
					</div>

					<div className="flex items-center gap-4">
						<IoIosArrowForward className='text-yellow-600 font-bold' />
						<p className="py-3"> <span className="font-semibold text-xl">Set your goals: </span>Tell us about your mentoring goals and preferences.</p>
					</div>

					<div className="flex items-center gap-4">
						<IoIosArrowForward className='text-yellow-600 font-bold' />
						<p className="py-3"> <span className="font-semibold text-xl">Match and connect: </span> Our algorithm will find the perfect mentorship match for you.</p>
					</div>

					<div className="flex items-center gap-4">
						<IoIosArrowForward className='text-yellow-600 font-bold' />
						<p className="py-3"> <span className="font-semibold text-xl">Start your journey: </span> Begin your mentorship adventure and watch your potential unfold.</p>
					</div>


					<div className="text-center bg-blue-900 hover:bg-yellow-400 hover:text-blue-800 font-semibold w-1/2 mx-auto rounded p-3 text-white transition-all">
						<button> <Link to='/mentee-register'>
							Join Me2Mentor Today!
						</Link> </button>
					</div>
				</div>

				<div>
					Some images


				</div>
			</div>


		</div>
	)
}

export default Mentors