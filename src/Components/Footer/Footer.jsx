import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer" // ✅ Changed to lowercase to match the href in Home.jsx
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Contact!!</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          Sankalpry07@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/sankalp-dixit-86b3ab240"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://www.github.com/dixitSankalp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
