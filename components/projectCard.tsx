import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  author: string;
  image: StaticImageData;
  buttonText: string;
  buttonLink: string;
}

export default function ProjectCard(props: CardProps) {
  return (
    <div className="flex bg-white p-8 rounded-lg shadow-lg relative hover:shadow-xl transition duration-500 transform hover:-translate-y-1">
      <div className="flex flex-col flex-1 my-auto pr-8">
        <h1 className="text-3xl text-gray-800 font-semibold mb-3">
          {props.title}
        </h1>
        <p className="text-gray-600 leading-6 tracking-normal">
          {props.description}
        </p>
        <Link href="https://github.com/rtybanana/brainboard">
            <button className="w-32 py-2 px-4 mt-8 text-white font-semibold rounded-md shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:bg-blue-800">
            {props.buttonText}
          </button>
        </Link>
      </div>
        <div className="font-bold max-w-sm flex-1 hidden md:flex">
          <Image src={props.image}/>
      </div>
      <div>
        <span className="absolute font-semibold py-2 px-8 text-sm text-white bottom-0 right-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md transform translate-x-2 translate-y-3 shadow-xl">
            {props.author}
        </span>
      </div>
    </div>
  );
}
