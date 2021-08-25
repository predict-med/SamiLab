import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className="border-t border-blue-50 mt-10"></div>
      <div className="justify-center items-start max-w-6xl mx-auto w-full">
          <div className="flex flex-row items-center mx-auto px-4 md:px-0 h-20 text-xs md:text-base">
          <div className="flex flex-grow text-gray-900">
              <span className="font-semibold">
              &nbsp;Christopher Fleetwood&nbsp;
            </span>{" | "}
            {new Date().getFullYear()}
          </div>
            <div className="flex gap-2 md:gap-5 font-medium">
            <Link href="https://github.com/FL33TW00D">
              <p className=" hover:text-blue-800">Privacy Policy</p>
            </Link>
            <Link href="mailto:fleetwoodpersonal@gmail.com">
              <p className=" hover:text-blue-800">Jobs</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
