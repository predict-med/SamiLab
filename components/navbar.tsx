import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky-nav flex justify-between items-center py-16 my-0 mx-auto bg-white w-full max-w-6xl">
      <Link href="/">
        <a className="inline-flex items-center py-2 mr-4">
        <h1 className="leading-4 text-6xl">
            <span className="font-normal text-gray-900">Sami</span><span className="font-bold text-blue-900">Lab</span>
        </h1>
        </a>
      </Link>
      <div className="font-semibold text-lg md:text-xl text-gray-800 tracking-tight items-end flex flex-row ml-auto">
        <Link href="/">
            <a className="p-4 hover:text-gray-600">Home</a>
        </Link>
        <Link href="/projects">
            <a className="p-4 hover:text-gray-600">Projects</a>
        </Link>
        <Link href="/people">
            <a className="p-4 hover:text-gray-600">People</a>
        </Link>
        <Link href="/about">
            <a className="p-4 hover:text-gray-600">About</a>
        </Link>
        <Link href="/contact">
            <a className="p-4 hover:text-gray-600">Contact</a>
        </Link>
      </div>
    </nav>
  );
}
