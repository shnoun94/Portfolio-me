import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { data } from './data/portfolio';
import './index.css';
import styles from './App.module.css';

const SECTIONS = {
  home:     Hero,
  skills:   Skills,
  projects: Projects,
  xp:       Experience,
  contact:  Contact,
};

export default function App() {
  const [active, setActive] = useState('home');

  const Section = SECTIONS[active];

  return (
    <div className={styles.app}>
      <Navbar active={active} onNav={setActive} />
      <main className={styles.main} key={active}>
        <Section data={data} onNav={setActive} />
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>
          {data.name.first} {data.name.last} · {new Date().getFullYear()} ·{' '}
          <span style={{ color: 'var(--green)' }}>open to work</span>
        </span>
      </footer>
    </div>
  );
}
