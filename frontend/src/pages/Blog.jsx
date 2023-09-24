/* eslint-disable react/no-unescaped-entities */
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { blog } from "../utils/data"

const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="px-10 pt-28 text-blue-900">
        <div className="text-center font-bold text-2xl pb-5">
          Blog
        </div>

        <div className="flex font-light gap-20">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search here.."
              className="border p-2 px-10 outline-slate-400"
            />
          </div>
          <div className="md:grid grid-rows-3 gap-10 ">
            {
              blog.map((data) => {
                const { id, img, title, content } = data
                return (
                  <div key={id} className="md:grid grid-rows-2 p-3 gap-5 rounded-md border">
                    <div>
                      <img src={img} className="w-full" />
                    </div>

                    <div>
                      <h1>{title} </h1>
                      <p>{content} </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


      </div>

      <Footer />
    </>
  )
}

export default Blog