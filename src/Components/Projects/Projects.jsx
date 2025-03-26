import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Code-Quest Website"
          main="A website for Q&A where developers ask and answer coding-related questions as like as Stack Overflow, which is developed with ReactJs and JavaScript."
          githubLink="https://github.com/dixitSankalp/codequest" // Replace with actual GitHub link
        />
        <ProjectCard
          title="E-Commerce Website"
          main="A web application replicating Amazon's interface using HTML, CSS, JavaScript, and ReactJs for a dynamic user experience."
          githubLink="https://github.com/dixitSankalp/Amazon_Clone"
        />
        <ProjectCard
          title="Hotel Management System"
          main="A C++ application for managing room bookings, check-ins, and guest details using classes, inheritance, and file handling."
          githubLink="https://github.com/dixitSankalp/Hotel_management_system"
        />
      </div>
    </div>
  );
};

export default Projects;
