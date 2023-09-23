import styles from "@styles/Nav.module.css";
import { currentPageAtom } from "@atoms/pageAtom";
import { useRecoilValue } from "recoil";

export default function Page() {
  const currentPage = useRecoilValue(currentPageAtom);

  return (
    <>
      <div
        className={`${styles.container} inline-flex items-center justify-center`}
      >
        <div
          className={`${styles.content} container flex flex-wrap items-center justify-center mt-2`}
        >
          <h1>{currentPage.caption}</h1>
        </div>
      </div>
    </>
  );
}
