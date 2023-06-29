'use client';

import {FiSearch} from "react-icons/fi"
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const data = [
  {
    id: 1,
    image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Project test1",
    category:"No se"
  },
  {
    id: 2,
    image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Project test2",
    category:"No se"
  },
  {
    id: 3,
    image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Project test3",
    category:"No se"
  },
]

const ProjectsClient = () => {

  //const [filteredProjects, setFilteredProjects] = useState([])
  const [inputValue, setInputValue] = useState('')

  const filteredProjects = inputValue !== '' ? data.filter(project => project.title.toLowerCase().includes(inputValue.toLowerCase())) : data;

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10 w-4/5">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
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
                                bg-primary-light
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
              key={project.id}
            />
          )
        })}
			</div>
		</section>
  )
}

export default ProjectsClient