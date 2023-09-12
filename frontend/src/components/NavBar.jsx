import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<div className='w-full '>
			<nav className="bg-blue-900 text-white font-bold p-4 flex justify-evenly">
				<div>
					<h1>Me2Mentor</h1>
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
						<li>Services</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</div>

				<div>
					<input type="text" name="" id="" />
					<button>Search</button>
				</div>

			</nav>


		</div>
	)
}

export default NavBar