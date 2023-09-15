import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { FaHouseChimney } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { navLinks } from '../utils/data'

const Footer = () => {
	return (
		<div className="px-10 lg:grid grid-cols-3 gap-20 bg-blue-900  text-white py-12">
			<div>
				<h1 className="font-bold text-3xl">Me<span className="text-yellow-400 font-bold text-4xl">2</span>Mentor</h1>

				<p className='text-gray-300 pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error totam deserunt vero similique perspiciatis minima, enim officia eos nemo aspernatur cumque quo expedita voluptatibus aliquid, exercitationem adipisci commodi voluptas temporibus.</p>

				<div className='pt-5 space-y-5'>
					<div className='flex gap-4 items-center'>
						<BsFillTelephoneFill className='text-yellow-400' />
						<p>+123 (4567) 890</p>
					</div>
					<div className='flex gap-4 items-center'>
						<IoMdMail className='text-yellow-400' />
						<p>info@top-finance.com</p>
					</div>
					<div className='flex gap-4 items-center'>
						<FaHouseChimney className='text-yellow-400' />
						<p>380 St Kilda Road, Melbourne VIC 3004, Australia</p>
					</div>

				</div>
			</div>

			<div className='lg:flex flex-col items-center' >
				<div className="lg:relative">
					<p className="text-3xl font-bold inline-block uppercase pb-1">Links</p>
					<div className="lg:absolute bottom-0 left-0 lg:w-1/2 md:w-[50px]  w-1/5 border-b-4 border-yellow-400 "></div>
				</div>
				<ul className='space-y-5 pt-5'>
					{navLinks.map((link) => {
						const { id, url, name } = link
						return (
							<li key={id} className="flex gap-4 items-center hover:text-yellow-300">
								<IoIosArrowForward className='text-yellow-400' />
								<Link to={url}>
									{name}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<div className='flex flex-col items-center' >
				<div className="relative">
					<p className="text-3xl font-bold inline-block uppercase pb-1">Links</p>
					<div className="absolute bottom-0 left-0 w-1/2  border-b-4 border-yellow-400 "></div>
				</div>
				<ul className='space-y-5 pt-5'>
					<li className='flex gap-4 items-center hover:text-yellow-300'>
						<IoIosArrowForward className='text-yellow-400' />
						<Link to='/'>
							Home
						</Link>
					</li>

					<li className='flex gap-4 items-center hover:text-yellow-300'><IoIosArrowForward className='text-yellow-400' />
						<Link to='/about'>
							About
						</Link>
					</li>

					<li className='flex gap-4 items-center hover:text-yellow-300'><IoIosArrowForward className='text-yellow-400' />
						<Link to='/services'>
							Services
						</Link>
					</li>

					<li className='flex gap-4 items-center hover:text-yellow-300'><IoIosArrowForward className='text-yellow-400' />
						<Link to='/blog'>
							Blog
						</Link>
					</li>

					<li className='flex gap-4 items-center hover:text-yellow-300'><IoIosArrowForward className='text-yellow-400' />
						<Link to='/contact'>
							Contact
						</Link>
					</li>
				</ul>

			</div>


			<div className='lg:flex flex-col items-center' >
				<div className="lg:relative">
					<p className="text-3xl font-bold inline-block uppercase pb-1">Supports</p>
					<div className="lg:absolute bottom-0 left-0 lg:w-1/2 md:w-1/5 w-1/4 border-b-4 border-yellow-400"></div>
			<div className='flex flex-col items-center' >
				<div className="relative">
					<p className="text-3xl font-bold inline-block uppercase pb-1">Supports</p>
					<div className="absolute bottom-0 left-0 w-1/2  border-b-4 border-yellow-400"></div>
				</div>
				<ul className='space-y-5 pt-5 '>

					<li className='hover:text-yellow-300'>
						<Link to='/mentee-register'>
							Connect to a Mentor
						</Link>
					</li>

					<li className='hover:text-yellow-300'>
						<Link to='/mentor-register'>
							Become a Mentor
						</Link>
					</li>

					<li className='hover:text-yellow-300'>
						<Link to='/'>
							Support Sysytem
						</Link>
					</li>
				</ul>
			</div>
			</div>
		</div>
	</div>
	)
}

export default Footer