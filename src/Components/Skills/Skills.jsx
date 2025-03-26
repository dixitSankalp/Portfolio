import React from "react";
import SkillsImg from "../../assets/image2.png";
import { IoArrowForward } from "react-icons/io5";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="text-white md:flex overflow-hidden items-center md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      {/* Image Container */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img className="md:h-80" src={SkillsImg} alt="Skills img" />
      </div>

      {/* Skills Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold">Skills</h2>
        <ul>
          {/* Programming Skills */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                (I) Programming Languages
              </h1>
              <ul className="text-sm md:text-md leading-tight list-decimal ml-5">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </span>
          </div>

          {/* Web Development */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                (II) Web Development
              </h1>
              <ul className="text-sm md:text-md leading-tight list-decimal ml-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </span>
          </div>

          {/* Databases */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                (III) Databases
              </h1>
              <ul className="text-sm md:text-md leading-tight list-decimal ml-5">
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </span>
          </div>

          {/* Additional Skills */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                (IV) Additional Skills
              </h1>
              <ul className="text-sm md:text-md leading-tight list-decimal ml-5">
                <li>Data Structures & Algorithms (DSA)</li>
                <li>Machine Learning</li>
                <li>Data Analysis</li>
              </ul>
            </span>
          </div>

          {/* Soft Skills */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                (V) Soft Skills
              </h1>
              <ul className="text-sm md:text-md leading-tight list-decimal ml-5">
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Time Management</li>
              </ul>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
