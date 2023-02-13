import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({
  backgroundImg,
  title,
  languageProgramming,
  demo,
  github,
}) => {
  return (
    <article className="relative flex items-center justify-center h-auto w-full shadow-sm shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <section className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 font-bold text-white text-center">
          {languageProgramming}
        </p>
        <div className="flex flex-auto gap-2 justify-between">
          <Link href={demo}>
            <p className="p-3 gap-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
              Github
            </p>
          </Link>
          <Link href={github}>
            <p className="p-3 gap-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
              Demo
            </p>
          </Link>
        </div>
      </section>
    </article>
  )
}

export default ProjectItem
