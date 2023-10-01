/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Contact = () => {
	return (
		<>
			<NavBar />
			<div className="pt-28 grid justify-items-center	text-center py-10">
				<h4 className="font-extrabold text-4xl text-blue-900">Let's Get In Touch</h4>
				<p>Kindly leave us a message and we will get back to you in the shortest time possible</p>
			</div>

			<div className="bg-contact bg-cover relative text-white py-16 px-5 ">
				<div className="absolute inset-0 bg-blue-900 opacity-80 z-20"></div>
				<div className="text-center z-20 text-white relative text-4xl font-bold pb-5 "><p>Contact Us</p></div>
				<div className="relative z-20 md:flex items-center gap-5 ">
					<div >

						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283124574!2d3.28395955!3d6.548055099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1694735036411!5m2!1sen!2sng"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-md w-full md:w-[350px] lg:w-[600px] h-[450px]"
						></iframe>
					</div>

					<div className="w-full pt-5 md:pt-0">
						<form >
							<div >
								<label htmlFor="name" className="block text-base font-semibold">Full Name</label>
								<input type="text" placeholder="Full Name" className="text-black border outline-0 p-2 rounded-md w-full  bg-[#f5f8fa]" />
							</div>
							<div>
								<label htmlFor="email" className="block text-base font-semibold">Email</label>
								<input type="email" placeholder="Email" className="text-black border outline-0 p-2 rounded-md w-full  bg-[#f5f8fa]" />
							</div>
							<div>
								<label htmlFor="number" className=" block text-base font-semibold">Phone Number</label>
								<input type="number" placeholder="Phone Number" className="text-black border outline-0 p-2 rounded-md w-full bg-[#f5f8fa]" />
							</div>

							<div className="">
								<label htmlFor="name" className="block text-base font-semibold">Message</label>
								<textarea name="" id="" cols="10" rows="7" placeholder="Message" className="text-black border outline-0 p-2 rounded-md w-full  bg-[#f5f8fa]"></textarea>
							</div>

							<div>
								<button className="bg-yellow-400 hover:bg-yellow-200 p-3 text-black font-bold w-full rounded-md shadow-lg">Submit</button>
							</div>
						</form>

					</div>

				</div>

			</div>
			<Footer />
		</>
	)
}

export default Contact