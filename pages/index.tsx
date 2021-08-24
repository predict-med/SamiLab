import Layout from "../components/layout";
import Image from "next/image";
import uea from "../public/3264.webp";

export default function Home() {
    return (
        <Layout>
            <div className="container text-center min-w-3xl pt-8 pb-12 mx-auto">
                <div className="text-8xl">🧠</div>
                <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
                    Pushing predictive medicine forward.
                </div>
                <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
                    Our mission is to address the personalised medicine gap in
                    dementia research.
                </div>
            </div>
            <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-blue-50 py-48">
                <div className="container text-center mx-auto max-w-6xl">
                    <div className="container grid lg:grid-cols-2 gap-x-6 gap-y-12 lg:gap-y-0">
                        <div>
                            <p className="text-xl text-gray-800">
                                Based out of the University of East Anglia, our
                                lab is focused on using analytical and machine
                                learning techniques to improve patient outcomes.
                            </p>
                            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4">
                                Our Work
                            </button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
