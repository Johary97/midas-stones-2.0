import styles from "@styles/Contact.module.css";
import ContactItem from "@/components/cards/contactitem";

export default function Contact() {
  return (
    <>
      <div className={`${styles.right} inline-flex items-center`}>
        <ContactItem
          icon="phone"
          title="Phone number"
          value={
            <>
              +261 32 98 869 81
              <br />
              +261 38 65 069 82
            </>
          }
        ></ContactItem>
        <div className={styles.versep}></div>
        <ContactItem
          icon="mail"
          title="Email Address"
          value="stonesmidas@gmail.com"
        ></ContactItem>
      </div>
    </>
  );
}
