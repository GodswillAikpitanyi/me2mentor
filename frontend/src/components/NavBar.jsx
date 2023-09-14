import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from '../utils/data'

const NavBar = () => {
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	const toggleMobileSidebar = () => {
		setMobileSidebarOpen(!mobileSidebarOpen);
	};




	return (
		<div className="w-full bg-blue-900 fixed shadow-lg">
			<div className="lg:hidden">
				{/* Mobile Navbar */}
				<nav className="text-white font-bold p-4 flex flex-row-reverse justify-between items-center">
					{/* Mobile Sidebar Toggle Button */}
					<div>
						<button
							onClick={toggleMobileSidebar}
							className="text-white p-2 focus:outline-none"
						>
							{mobileSidebarOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>
					</div>

					{/* Logo on Mobile Navbar */}
					<div>
						<h1 className="font-bold text-3xl">
							Me<span className="text-yellow-400 font-bold text-4xl">2</span>Mentor
						</h1>
					</div>
				</nav>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`${mobileSidebarOpen ? "block" : "hidden"
					} lg:hidden fixed top-0 pt-10 pl-10 left-0 w-48 shadow-lg bg-yellow-300 text-black font-semibold z-10 h-full overflow-y-auto transition-all ease-in-out duration-300`}
			>
				<ul className="p-4 space-y-5">
					{navLinks.map((link) => {
						const { id, url, name } = link
						return (
							<li key={id} className="hover:text-yellow-300">
								<Link to={url} onClick={toggleMobileSidebar}>
									{name}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>

			{/* Desktop Navbar */}
			<nav className="hidden lg:flex justify-between bg-blue-900 text-white font-bold p-4">
		<div className='w-full bg-blue-900 px-5'>
			<nav className=" text-white font-bold p-4 flex justify-between items-center">
				<div>
					<h1 className="font-bold text-3xl">
						Me<span className="text-yellow-400 font-bold text-4xl">2</span>Mentor
					</h1>
				</div>

				<div>
					<ul className="p-4 lg:flex gap-4 items-center hidden ">
						{navLinks.map((link) => {
							const { id, url, name } = link
							return (
								<li key={id} className="hover:text-yellow-300">
									<Link to={url} onClick={toggleMobileSidebar}>
										{name}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>

				<div className="flex gap-4 items-center">
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
						<button className="bg-yellow-400 text-blue-900 p-2 rounded-md transition-all hover:bg-blue-500 hover:text-yellow-400">
							<Link to="/mentor-register">Become a Mentor</Link>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
