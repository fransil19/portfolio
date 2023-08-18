'use client';

import {FiSearch} from "react-icons/fi"
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const data = [
  {
    id: 1,
    image:"/pokepi.png",
    title:"Pokepi",
    category:"Pokedex made with React, Redux, PostgreSQL, Node.js and Express.",
    url: "https://pi-pokemon-silvestro.vercel.app/"
  },
  {
    id: 2,
    image:"/rentClone.png",
    title:"Airbnb rental clone",
    category:"Rental clone made with Next.js, Mongodb, Prisma, Tailwind and Next Auth.",
    url: "https://rent-clone-practice.vercel.app/"
  },
  {
    id: 3,
    image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Groove Tickets - soon",
    category:"Ecommerce app to buy tickets for concerts made with React, Redux, PostgreSql, Node.Js, Express, MercadoPago and Firebase.",
    url: ""
  },
]

interface ProjectsClientProps{
  id: string
}

const ProjectsClient: React.FC<ProjectsClientProps> = ({id}) => {

  //const [filteredProjects, setFilteredProjects] = useState([])
  const [inputValue, setInputValue] = useState('')

  const filteredProjects = inputValue !== '' ? data.filter(project => project.title.toLowerCase().includes(inputValue.toLowerCase())) : data;

  return (
    <section id={id} className="py-5 sm:py-10 mt-5 sm:mt-10 w-4/5">
			<div className="text-center">
				<p className="font-general-medium text-3xl sm:text-4xl mb-1 text-ternary-dark dark:text-gray-300">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-gray-300
                        text-lg
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-gray-400
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-neutral-100
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-gray-800 dark:text-gray-400 w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setInputValue(e.target.value);
							}}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-gray-700
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-gray-700
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							//required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					{/* <ProjectsFilter setSelectProject={setSelectProject} /> */}
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {filteredProjects.map(project => {
          return (
            <ProjectCard 
              image={project.image}
              title={project.title}
              category={project.category}
              url={project.url}
              key={project.id}
            />
          )
        })}
			</div>
		</section>
  )
}

export default ProjectsClient