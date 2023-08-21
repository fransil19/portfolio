'use client'

import Image from "next/image"

import { useRouter } from "next/navigation"

interface ProjectCardProps{
  image: string,
  title: string,
  category: string,
  url: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image, title, category, url
}) => {
  const router = useRouter();

  return (
    <div>
      <div onClick={() => {router.push(url)}} aria-label="Project Card" className="h-full">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className="w-full h-48 relative">
            <Image src={image} alt="project image" className="rounded-t-xl border-none" fill/>
					</div>
					<div className="rounded-b-xl text-center px-4 py-6 bg-white border-t-2 border-t-slate-300">
						<p className="font-general-medium font-bold text-xl md:text-xl text-black dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-black dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</div>

    </div>
  )
}

export default ProjectCard