// File: src/pages/index.js
import Head from 'next/head';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import Gallery from '../components/Sections/Gallery';
import Education from '../components/Sections/Education';
import Achievements from '../components/Sections/Achievements';
import Philosophy from '../components/Sections/Philosophy';
import Contact from '../components/Sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nabina Rana Bhat | Performer & Actor</title>
        <meta name="description" content="Award-winning performer specializing in emotional, socially-driven storytelling through theatre, film, and movement." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="cinematic-portfolio">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Gallery />
        <Education />
        <Achievements />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}