import Image from "next/image";

interface CardProps {
    image: string;
    buttonText: string;
}

export default function ProjectCard(props: CardProps) {
    return (
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-3 mt-10  ">
            <div>
                <div className="bg-white max-w-xs shadow-lg mx-auto border-b-4 border-green-200 rounded-2xl overflow-hidden  hover:shadow-xl transition duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="flex h-32  items-center">
                    </div>
                    <p className="py-6 px-6 text-lg tracking-wide text-center">
                        Poster
                    </p>
                    <div className="flex justify-center px-5 mb-2 text-sm ">
                        <button
                            type="button"
                            className="border border-green-200 text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
                        >
                            {props.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
