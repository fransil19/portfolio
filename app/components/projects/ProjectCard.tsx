'use client'

import Image from "next/image"

import { useRouter } from "next/navigation"

interface ProjectCardProps{
  image: string,
  title: string,
  category: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image, title, category
}) => {
  const router = useRouter();

  return (
    <div>
      <div onClick={() => {router.push("/projects/single-project")}} aria-label="Project Card">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className="w-full">
            <img src={image} alt="project image" className="rounded-t-xl border-none" />
					</div>
					<div className="rounded-b-xl text-center px-4 py-6 bg-white">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</div>

    </div>
  )
}

export default ProjectCard