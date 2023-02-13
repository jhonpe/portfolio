import React from 'react'
import ProjectItem from './ProjectItem'
import recipes from '../public/assets/projects/recipes.jpg'
import landingPage from '../public/assets/projects/landing.jpg'
import shop from '../public/assets/projects/shop.jpg'
import covid from '../public/assets/projects/covid.jpg'
import beverages from '../public/assets/projects/beverages.jpg'
import crypto from '../public/assets/projects/crypto.jpg'

const Projects = () => {
  return (
    <article id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4">
      <h1 className="text-4xl font-bold text-center text-yellow-500">
        Proyectos
      </h1>
      <p className="text-center py-6"></p>
      <section className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          backgroundImg={landingPage}
          title="Landing Page"
          languageProgramming="HTML, CSS, JavaScript"
          demo="https://github.com/jhonpe/responsive-plants"
          github="https://jhonpe.github.io/responsive-plants/"
        />
        <ProjectItem
          backgroundImg={shop}
          title="Landing Page"
          languageProgramming="HTML, CSS, JavaScript"
          demo="https://github.com/jhonpe/ecommerce-website"
          github="https://jhonpe.github.io/ecommerce-website/"
        />
        <ProjectItem
          backgroundImg={recipes}
          title="Buscador de Recetas"
          languageProgramming="Bootstrap 5, JavaScript"
          demo="https://github.com/jhonpe/recipesearch"
          github="https://recipesearchfood.netlify.app/"
        />
        <ProjectItem
          backgroundImg={covid}
          title="Covid-19"
          languageProgramming="JavaScript, ReactJS"
          demo="https://github.com/jhonpe/covid-19-tracker"
          github="https://covid-world-map.netlify.app/"
        />
        <ProjectItem
          backgroundImg={crypto}
          title="Crypto"
          languageProgramming="JavaScript, ReactJS"
          demo="https://github.com/jhonpe/cryptocurrency"
          github="https://cryptocurrency-crypto.vercel.app/"
        />
        <ProjectItem
          backgroundImg={beverages}
          title="Buscador de Bebidas"
          languageProgramming="ReactJS, Context-api"
          demo="https://github.com/jhonpe/drinksfinder"
          github="https://drinksfinder.vercel.app/"
        />
      </section>
    </article>
  )
}

export default Projects
