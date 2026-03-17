import Terminal, { Line, Cursor } from './Terminal';
import styles from './Contact.module.css';

const ICONS = { email: '@', location: '$', linkedin: '#', github: '>' };

export default function Contact({ data }) {
  const items = [
    { icon: '@', label: 'email',       value: data.email },
    { icon: '$', label: 'localisation', value: data.location },
    { icon: '#', label: 'linkedin',    value: data.linkedin },
    { icon: '>', label: 'github',      value: data.github },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.h2}>contact --send</h2>
        <p className={styles.sub}>
          Disponible pour une alternance dès {data.alternance.debut}
        </p>
      </div>

      <Terminal title="status">
        <Line cmd="echo" arg="$AVAILABILITY" />
        <Line color="green">Ouvert aux opportunités d'alternance</Line>
        <div style={{ marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--muted)' }}># n'hésitez pas à me contacter !</span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--muted)' }}>visitor@portfolio:~$ </span>
          <Cursor />
        </div>
      </Terminal>

      <div className={styles.grid}>
        {items.map(i => (
          <div key={i.label} className={styles.card}>
            <span className={styles.icon}>{i.icon}</span>
            <div>
              <p className={styles.label}>{i.label}</p>
              <p className={styles.value}>{i.value}</p>
            </div>
          </div>
        ))}
      </div>

      {data.interests && data.interests.length > 0 && (
        <div className={styles.interests}>
          <p className={styles.intLabel}>// Et aussi...</p>
          {data.interests.map(int => (
            <div key={int} className={styles.intItem}>
              <span className={styles.sq}>■</span> {int}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
