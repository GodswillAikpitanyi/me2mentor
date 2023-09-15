import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { topMentors } from "../utils/data"

const AllMentors = () => {
	return (
		<div>
			<NavBar />
			<div className="pt-28 pb-10">
				<div>
					<input
						type="text"
						name=""
						id=""
						placeholder="Search"
						className="border outline-0 p-2 px-3 rounded-md bg-[#f5f8fa] focus:border-2 focus:shadow-[0-0-4px-1px-rgba(0,208,228,0.3)]"
					/>
				</div>

				<div>
					<div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:w-[70%] lg:w-[80%] mx-auto gap-5 md:mt-0 pt-5 ">
						{topMentors.map((mentors) => {
							const { id, name, field, url, category, experience, country } = mentors
							return (
								<div key={id} className='rounded-md shadow-md mb-5 md:mb-0'>
									<div>
										<img src={url} alt="top-mentors" className='rounded-t-md w-full' />
									</div>
									<div className=' bg-blue-700 text-white p-2 hover:bg-yellow-400 hover:text-black transition rounded-b-md'  >
										<p className='font-bold text-lg'>{name}, <span className='text-sm font-normal'>{country}</span> </p>
										<p className='font-semibold '> Expertise: <span className='text-black '>{field}</span> </p>
										<p className='font-semibold'>Category: <span className='text-black '>{category}</span> </p>
										<p className='font-semibold '>Experience: <span className='text-black '>{experience}</span> </p>
									</div>
								</div>
							)
						})}
					</div>
				</div>

			</div>
			<Footer />
		</div>
	)
}

export default AllMentors