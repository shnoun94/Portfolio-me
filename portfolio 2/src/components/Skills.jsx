import Terminal, { Line } from './Terminal';
import styles from './Skills.module.css';

export default function Skills({ data }) {
  const cats = [
    { label: 'Langages',   color: 'green',  items: data.skills.langages },
    { label: 'Frameworks', color: 'cyan',   items: data.skills.frameworks },
    { label: 'Outils',     color: 'amber',  items: data.skills.outils },
    { label: 'Méthodes',   color: 'purple', items: data.skills.methodes },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.h2}>stack --list</h2>
        <p className={styles.sub}>Technologies maîtrisées et en apprentissage</p>
      </div>

      <div className={styles.grid}>
        {cats.map(c => (
          <div key={c.label} className={styles.card}>
            <p className={`${styles.cat} ${styles[c.color]}`}>{c.label}</p>
            <div className={styles.tags}>
              {c.items.map(i => (
                <span key={i} className={`${styles.tag} ${styles['tag_' + c.color]}`}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Terminal title="langues">
        {data.langues.map(l => (
          <Line key={l.code}>
            <span style={{ color: l.code === 'FR' ? 'var(--green)' : 'var(--cyan)', marginRight: 8 }}>
              {l.code}
            </span>
            <span style={{ color: 'var(--text)', marginRight: 8 }}>{l.lang}</span>
            <span style={{ color: 'var(--muted)' }}>{'·'.repeat(20)}</span>
            <span style={{
              color: l.code === 'FR' ? 'var(--green)' : 'var(--cyan)',
              marginLeft: 8,
              border: '1px solid',
              borderColor: l.code === 'FR' ? 'var(--green)' : 'var(--cyan)',
              padding: '1px 7px',
              borderRadius: 2,
              fontSize: 11,
            }}>
              {l.level}
            </span>
          </Line>
        ))}
      </Terminal>
    </section>
  );
}