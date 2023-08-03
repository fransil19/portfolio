'use client'
import ProjectsClient from "./projects/ProjectsClient";
import ProjectCard from "./projects/ProjectCard";
import Button from "./Button";
import ContactForm from "./contact/ContactForm";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <section id="home" className="flex flex-col items-start w-4/5 text-4xl pt-20 mb-10 text-black dark:text-gray-300">
          <h1 className="">Hello, my name is  Franco Nicolás Silvestro</h1>
          <h2 className="pt-10">
            I&apos;m a Full Stack & Automation Developer from Argentina with love to grow, gain experience and share all my
            knowledge developing good quality apps.
          </h2>
        </section>
        <Button description="Download My CV" url="/CV Franco Nicolas Silvestro.pdf"/>
        <ProjectsClient id="projects"/>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
