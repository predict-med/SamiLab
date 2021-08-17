import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container text-center min-w-3xl pb-24 pt-20 mx-auto">
        <div className="text-8xl">🧠</div>
        <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
          Pushing predictive medicine forward.
        </div>
        <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
          Our mission is to address the personalised medicine gap in dementia
          research.
        </div>
        <div className="w-full max-w-6xl mx-auto border border-gray-100"></div>
      </div>
    </Layout>
  );
}
