import Head from 'next/head'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Work from '../components/Work'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jhon Pérez</title>
        <meta name="description" content="Front-End Web Developer" />
      </Head>
      <Main />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
