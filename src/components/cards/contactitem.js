import styles from "@styles/ContactItem.module.css";

export default function ContactItem(props) {
  return (
    <>
      <div className={`${styles.container} flex flex-col`}>
        <p className={styles.title}>{props.title}</p>
        <div className="flex flex-row items-center">
          <span className={`material-symbols-outlined ${styles.icon}`}>
            {props.icon}
          </span>
          <p className={styles.value}>{props.value}</p>
        </div>
      </div>
    </>
  );
}
