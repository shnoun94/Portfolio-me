import styles from './Projects.module.css';

export default function Projects({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.h2}>ls ./projets/</h2>
        <p className={styles.sub}>Projets réalisés pendant la formation</p>
      </div>

      <div className={styles.grid}>
        {data.projects.map(p => (
          <div
            key={p.id}
            className={styles.card}
            onClick={() => p.link && window.open(p.link, "_blank")}
            style={{ cursor: p.link ? "pointer" : "default" }}
          >
            <div className={styles.num}>./projet_{p.id}</div>
            <div className={styles.name}>{p.name}</div>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.stack}>
              {p.stack.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <div className={styles.footer}>
              <span className={styles.meta}>{p.meta}</span>
              {p.github && p.github !== '#' && (
                <a className={styles.ghLink} href={p.github} target="_blank" rel="noreferrer">
                  gh ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
