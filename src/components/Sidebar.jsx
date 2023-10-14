import Link from "next/link";
import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="w-0 p-0 overflow-hidden transition-all bg-white fixed top-0 right-0 z-[999] h-screen">
      <div className="w-full flex items-center justify-between">
        <Link href={"/"} className="text-2xl font-[600]">
          <span className="text-[#ff8913]">Naruto</span> Bloggers
        </Link>
        <button className="text-3xl hover:rotate-180 transition-all">
          <AiOutlineClose />
        </button>
      </div>
      <div className="space-y-4 mt-20">
        <Link
          href={"/"}
          className="flex justify-between w-full p-2 border rounded-md text-lg hover:text-[#ff8913]"
        >
          <span>Home</span>
          <span className="text-3xl">
            <LiaAngleRightSolid />
          </span>
        </Link>
        <Link
          href={"/blogs"}
          className="flex justify-between w-full p-2 border rounded-md text-lg hover:text-[#ff8913]"
        >
          <span>Blogs</span>
          <span className="text-3xl">
            <LiaAngleRightSolid />
          </span>
        </Link>
        <Link
          href={"/about-us"}
          className="flex justify-between w-full p-2 border rounded-md text-lg hover:text-[#ff8913]"
        >
          <span>About Us</span>
          <span className="text-3xl">
            <LiaAngleRightSolid />
          </span>
        </Link>
        <Link
          href={"/contact"}
          className="flex justify-between w-full p-2 border rounded-md text-lg hover:text-[#ff8913]"
        >
          <span>Contact</span>
          <span className="text-3xl">
            <LiaAngleRightSolid />
          </span>
        </Link>
      </div>
      <div className="absolute bottom-10 w-full left-0 flex items-center justify-center">
        <button className="w-[90%] px-6 py-3 font-[600] text-white rounded-md hover:bg-[#000] transition-all duration-500 bg-[#ff8913]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
