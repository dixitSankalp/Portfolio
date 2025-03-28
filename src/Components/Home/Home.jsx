import React from "react";
import avatarImg from "../../assets/image1.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I bring enthusiasm, fresh perspectives, and a strong foundation.
          Although I may be new to the workforce, I am eager to leverage my
          academic background and passion for industry to contribute effectively
          and learn and grow within a professional environment.
        </p>
        {/* Link to the Footer using an anchor tag */}
        <a href="#footer">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img className="rounded-2xl" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
