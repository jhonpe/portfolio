import Image from 'next/image'
import React from 'react'
import deved from '../public/assets/projects/jhon.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <main id="home" className="w-full h-screen text-center">
      <article className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <section>
          <div className="mx-auto bg-gradient-to-b bg-blue-100 rounded-full w-60 h-60 relative overflow-hidden md:h-36 md:w-36">
            <Image src={deved} layout="fill" objectFit="cover" alt="/" />
          </div>
          <h2 className="py-2 sm:text-4xl text-3xl font-bold text-yellow-500 justify-center items-center">
            Jhon Pérez
          </h2>
          <h1 className="py-2 text-yellow-500">Front-End Web Developer</h1>

          <section className="flex items-center justify-between max-w-[200px] m-auto py-2 gap-3">
            <a
              href="https://www.linkedin.com/in/jhonperezamelines/"
              target="_blank"
              rel="noreferrer"
            >
              <section className="rounded-full shadow-sm bg-gray-100 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </section>
            </a>
            <a
              href="https://github.com/jhonpe"
              target="_blank"
              rel="noreferrer"
            >
              <section className="rounded-full shadow-sm bg-gray-100 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </section>
            </a>
          </section>

          <a
            href="https://drive.google.com/file/d/17kYNwNzpDEws8IWmcZa0nGEQiiP6VMQh/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded mt-8">
              Download CV
            </button>
          </a>
        </section>
      </article>
    </main>
  )
}

export default Main
