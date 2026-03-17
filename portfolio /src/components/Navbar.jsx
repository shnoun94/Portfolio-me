import styles from './Navbar.module.css';

const LINKS = [
  { id: 'home',     label: '~/home' },
  { id: 'skills',   label: 'skills' },
  { id: 'projects', label: 'projets' },
  { id: 'xp',       label: 'xp' },
  { id: 'contact',  label: 'contact' },
];

export default function Navbar({ active, onNav }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.dots}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>
      <span className={styles.title}>portfolio.sh — visitor@dev:~$</span>
      <div className={styles.links}>
        {LINKS.map(l => (
          <button
            key={l.id}
            className={`${styles.link} ${active === l.id ? styles.active : ''}`}
            onClick={() => onNav(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
