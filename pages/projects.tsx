import Layout from "../components/layout";
import Image from "next/image";
import connectivity from "../public/projects/connectivity.png";

export default function Projects() {
    return (
        <Layout>
            <div className="container text-center min-w-3xl pb-24 pt-16 mx-auto">
                <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
                    Projects.
                </div>
                <div className="text-lg text-gray-500 max-w-md mx-auto my-6">
                    We believe in collaborative and reproducible science. All of
                    our projects and papers are proudly <span className="font-bold"> open source. </span>
                </div>
            </div>
        </Layout>
    );
}
