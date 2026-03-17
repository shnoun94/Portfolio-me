import { useEffect, useState } from 'react';
import Terminal, { Line, Cursor } from './Terminal';
import styles from './Hero.module.css';

export default function Hero({ data, onNav }) {
  const [typed, setTyped] = useState('');
  const fullText = data.title;

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(iv);
    }, 45);
    return () => clearInterval(iv);
  }, [fullText]);

  return (
    <section className={styles.hero}>
      <p className={styles.prompt}>
        <span className={styles.user}>visitor@portfolio</span>
        <span className={styles.sep}>:~$</span> ./whoami.sh
      </p>

      <h1 className={styles.h1}>
        {data.name.first} <em className={styles.em}>{data.name.last}</em>
      </h1>

      <p className={styles.tagline}>
        <span className={styles.comment}>// </span>
        {typed}
        {typed.length < fullText.length && <span className={styles.caret}>|</span>}
      </p>

      <div className={styles.badges}>
        <span className={`${styles.badge} ${styles.green}`}>disponible</span>
        <span className={`${styles.badge} ${styles.cyan}`}>{data.location}</span>
        <span className={`${styles.badge} ${styles.amber}`}>Titre RNCP Niv.5 en cours</span>
      </div>

      <div className={styles.cta}>
        <button className={`${styles.btn} ${styles.primary}`} onClick={() => onNav('contact')}>
          $ contact --now
        </button>
        <button className={`${styles.btn} ${styles.outline}`} onClick={() => onNav('projects')}>
          ./mes-projets.sh
        </button>
      </div>

      <Terminal title="bash — à-propos.sh">
        <Line cmd="cat" arg="about.txt" />
        <Line color="muted">{'# ' + data.about.slice(0, 48)}</Line>
        <Line color="muted">{'# ' + data.about.slice(48)}</Line>

        <div style={{ marginTop: '0.75rem' }}>
          <Line cmd="echo" arg="$ALTERNANCE_DETAILS" />
          <Line>
            <span style={{ color: 'var(--green)' }}>DEBUT: </span>
            <span style={{ color: 'var(--text)' }}>{data.alternance.debut}</span>
          </Line>
          <Line>
            <span style={{ color: 'var(--green)' }}>RYTHME: </span>
            <span style={{ color: 'var(--text)' }}>{data.alternance.rythme}</span>
          </Line>
          <Line>
            <span style={{ color: 'var(--green)' }}>DUREE: </span>
            <span style={{ color: 'var(--text)' }}>{data.alternance.duree}</span>
          </Line>
        </div>

        <div style={{ marginTop: '0.75rem' }}>
          <Line cmd="git log" arg="--oneline" />
          <Line color="muted">a3f1b2c feat: portfolio terminé</Line>
          <Line color="muted">9d84e1a fix: bugs résolus en prod</Line>
          <Line color="muted">2c19f77 init: premier commit</Line>
        </div>

        <div style={{ marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--muted)' }}>visitor@portfolio:~$ </span>
          <Cursor />
        </div>
      </Terminal>
    </section>
  );
}
