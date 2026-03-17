import styles from './Experience.module.css';

export default function Experience({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.h2}>git log --xp</h2>
        <p className={styles.sub}>Formation & expériences professionnelles</p>
      </div>

      <p className={styles.catLabel}>// Formation</p>
      {data.formation.map((f, i) => (
        <div key={i} className={styles.eduCard}>
          <span className={styles.eduDate}>{f.date}</span>
          <p className={styles.eduDegree}>{f.degree}</p>
          <p className={styles.eduSchool}>{f.school}</p>
          {f.detail && <p className={styles.eduDetail}>{f.detail}</p>}
          {f.tags.length > 0 && (
            <div className={styles.tags}>
              {f.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          )}
        </div>
      ))}

      <p className={styles.catLabel} style={{ marginTop: '2rem' }}>// Expériences</p>
      {data.experiences.map((e, i) => (
        <div key={i} className={styles.expItem}>
          <div className={styles.dot} />
          <span className={styles.expDate}>{e.date}</span>
          <p className={styles.expTitle}>{e.title}</p>
          <p className={styles.expCompany}>{e.company}</p>
          <ul className={styles.bullets}>
            {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
