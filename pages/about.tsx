import Layout from "../components/layout";

export default function About   () {
  return (
    <Layout>
      <div className="container text-center max-w-6xl mx-auto min-w-3xl pb-24 pt-16">
        <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
          About us.
        </div>
        <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
          Our mission is to address the personalised medicine gap in dementia
          research.
        </div>
        <div className="w-full max-w-4xl mx-auto border border-gray-100"></div>
          <div className="font-semibold text-xl pt-8">
              Founded in 2019, the Sami Lab is advancing predictive and personalised medicine in a range of fields.
          </div>
      </div>
    </Layout>
  );
}
