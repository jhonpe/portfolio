import Link from 'next/link'
import { useState } from 'react'
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineSolution,
} from 'react-icons/ai'

const Sidenav = () => {
  const [navbar, setNavbar] = useState(false)

  const handleNav = () => {
    setNavbar(!navbar)
  }

  return (
    <nav>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-orange-400"
      />

      {navbar ? (
        <article className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <Link href="/">
            <li
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration=200"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Inicio</span>
            </li>
          </Link>

          <Link href="/#work">
            <li
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration=200"
            >
              <AiOutlineSolution size={20} />
              <span className="pl-4">Experiencia</span>
            </li>
          </Link>

          <Link href="/#projects">
            <li
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration=200"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Proyectos</span>
            </li>
          </Link>

          <Link href="/#contact">
            <a
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration=200"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contacto</span>
            </a>
          </Link>
        </article>
      ) : (
        ''
      )}

      <article className="md:block hidden fixed top-[25%] z-10">
        <section className="flex flex-col">
          <div className="rounded-full shadow-xs bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="/">
              <div>
                <AiOutlineHome size={20} />
              </div>
            </Link>
          </div>
          <div className="rounded-full shadow-xs bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="/#work">
              <div>
                <AiOutlineSolution size={20} />
              </div>
            </Link>
          </div>

          <div className="rounded-full shadow-xs bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="/#projects">
              <div>
                <AiOutlineProject size={20} />
              </div>
            </Link>
          </div>
          <div className="rounded-full shadow-xs bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="/#contact">
              <div>
                <AiOutlineMail size={20} />
              </div>
            </Link>
          </div>
        </section>
      </article>
    </nav>
  )
}

export default Sidenav
