import styles from './Terminal.module.css';

export default function Terminal({ title = 'bash', children }) {
  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export function Line({ prompt, cmd, arg, children, color }) {
  const colorVar = {
    green:  'var(--green)',
    cyan:   'var(--cyan)',
    amber:  'var(--amber)',
    red:    'var(--red)',
    muted:  'var(--muted)',
  }[color] || 'var(--text)';

  return (
    <div className={styles.line}>
      {prompt && <span className={styles.prompt}>{prompt}</span>}
      {cmd    && <span className={styles.cmd}>{cmd} </span>}
      {arg    && <span className={styles.arg}>{arg}</span>}
      {children && <span style={{ color: colorVar }}>{children}</span>}
    </div>
  );
}

export function Cursor() {
  return <span className={styles.cursor} />;
}
