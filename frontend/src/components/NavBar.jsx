import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<div className='w-full bg-blue-900 px-5 '>
			<nav className=" text-white font-bold p-4 flex justify-between items-center">
				<div>
					<h1 className="font-bold text-3xl">Me<span className="text-yellow-400 font-bold text-4xl">2</span>Mentor</h1>
				</div>

				<div>
					<ul className="flex gap-8 ">
						<li className=" hover:text-yellow-300" >
							<Link to='/'>
								Home
							</Link>
						</li>
						<li className=" hover:text-yellow-300">
							<Link to='/about'>
								About
							</Link>
						</li>
						<li className=" hover:text-yellow-300" >
							<Link to='/services'>
								Services
							</Link>
						</li>
						<li className=" hover:text-yellow-300">
							<Link to='/blog'>
								Blog
							</Link>
						</li>
						<li className=" hover:text-yellow-300">
							<Link to='/contact'>
								Contact
							</Link>
						</li>

					</ul>
				</div>


				<div className="flex gap-4 items-center">
					<div>
						<input type="text" name="" id="" placeholder="Search" className="border outline-0 p-1 px-3 rounded-md  bg-[#f5f8fa] focus:border-2 focus:shadow-[0-0-4px-1px-rgba(0,208,228,0.3)]" />
					</div>
					<div>
						<button>Sign Up</button>
					</div>
					<div>
						<button>Log In</button>
					</div>
				</div>



			</nav>


		</div>
	)
}

export default NavBar