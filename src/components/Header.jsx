import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="w-full flex px-3 md:px-[30px] justify-between py-5 items-center">
      <div>
        <Link href={"/"} className="text-2xl font-[600]">
          <span className="text-[#ff8913]">Naruto</span> Bloggers
        </Link>
      </div>
      <div className="space-x-4 md:block hidden">
        <Link href={"/"} className="text-lg hover:text-[#ff8913]">
          Home
        </Link>
        <Link
          href={"/blogs"}
          className="text-lg hover:text-[#ff8913] transition-all duration-700"
        >
          Blogs
        </Link>
        <Link href={"/about-us"} className="text-lg hover:text-[#ff8913]">
          About Us
        </Link>
        <Link href={"/contact"} className="text-lg hover:text-[#ff8913]">
          Contact
        </Link>
      </div>
      <div className="md:block hidden">
        <button className="px-6 py-2 font-[600] text-white rounded-md hover:bg-[#000] transition-all duration-500 bg-[#ff8913]">
          Login
        </button>
      </div>
      <div className="md:hidden">
        <button className="text-3xl">
          <AiOutlineMenu />
        </button>
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;
