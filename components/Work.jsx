import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2021,
    title: 'Front-End DEVELOPER',
    duration: '2 años',
    details:
      'Desarrollo e implementación de un sistema web de facturación, paquetería y logística en el sector de encomiendas. Usamos tecnologías en Front-End JavaScript, ReactJS, Next.js.',
  },
  {
    year: 2020,
    title: 'Back-End DEVELOPER',
    duration: '1 año',
    details:
      'Trabajé en el desarrollo de la aplicación y mejoras de los servicios de la API. Usamos lenguaje de programción PHP, Laravel y Base de datos PostgreSQL',
  },
  {
    year: 2007,
    title: 'Analista de Sistemas y Programador',
    duration: '13 años',
    details:
      'Desarrollo de Software bajo Herramientas ORACLE, Oracle Designer PL/SQL, Oracle Forms, Oracle Reports, Base de datos Oracle (Funciones y Procedimientos en PLSQL, Trigger, Vistas, Optimización de Consultas SQL).',
  },
]
const Work = () => {
  return (
    <article id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-2">
      <h1 className="text-4xl font-bold text-center py-10 text-yellow-500">
        Experiencia Laboral
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </article>
  )
}

export default Work
