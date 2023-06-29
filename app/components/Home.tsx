'use client'
import ProjectsClient from "./projects/ProjectsClient";
import ProjectCard from "./projects/ProjectCard";
import Button from "./Button";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <section className="flex flex-col items-start w-4/5  text-4xl">
          <div>Hi, my name is  Franco Nicolás Silvestro.</div>
          <h2 className="">
            I&apos;m a Full Stack & Automation Developer with love to grow, gain experience and share all my
            knowledge.
          </h2>
        </section>
        <Button description="Download My CV"/>
        <ProjectsClient />
      </div>
    </div>
  );
};

export default Home;
