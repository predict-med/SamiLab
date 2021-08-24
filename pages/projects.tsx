import Layout from "../components/layout";
import Image from "next/image";
import connectivity from "../public/projects/connectivity.png"

export default function Projects() {
  return (
    <Layout>
      <div className="container text-center min-w-3xl pb-24 pt-16 mx-auto">
        <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
          Projects.
        </div>
        <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
          Our mission is to address the personalised medicine gap in dementia
          research.
        </div>
        <div className="w-full max-w-4xl border border-gray-100 mx-auto"></div>
      </div>
    </Layout>
  );
}
