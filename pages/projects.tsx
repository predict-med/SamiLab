import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <div className="container text-center min-w-3xl pb-24 pt-20 mx-auto">
        <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
          Projects.
        </div>
        <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
          Our mission is to address the personalised medicine gap in dementia
          research.
        </div>
        <div className="w-full max-w-6xl border border-gray-100 mx-auto"></div>
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-3 mt-10  ">
          <div>
            <div className="bg-white max-w-xs shadow-lg mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
              <div className="bg-indigo-500  flex h-32  items-center">
              </div>
              <p className="py-6 px-6 text-lg tracking-wide text-center">
                Poster
              </p>
              <div className="flex justify-center px-5 mb-2 text-sm ">
                <button
                  type="button"
                  className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
