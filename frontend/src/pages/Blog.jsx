import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { blog } from "../utils/data"

const Blog = () => {
	return (
		<>
			<NavBar />
			<div className="px-10 pt-28 pb-16 text-blue-900">
				<div className="text-center font-bold text-2xl pb-5">
					Blog

				</div>

				<div className="flex lg:flex-row flex-col font-light gap-20 ">
					<div className="lg:w-[30%]">
						<input
							type="text"
							name=""
							id=""
							placeholder="Search here.."
							className="border p-2 px-10 outline-slate-400 w-full"
						/>
					</div>

					<div className="lg:w-[70%]">
						<div className="md:grid grid-rows-2 gap-10 ">
							{
								blog.map((data) => {
									const { id, img, title, content } = data
									return (
										<div key={id} className="p-3 rounded-md border">
											<div className="w-full">
												<img src={img} className="w-full" />
											</div>

											<div>
												<h1 className="font-bold text-2xl">{title} </h1>
												<p>{content} </p>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Blog