import styles from "./Buttons.module.scss";
import { GrPowerReset } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Buttons({ buttonClick }) {
  return (
    <div className={`${styles["button-wrapper"]}`}>
      <GrPowerReset onClick={(e) => buttonClick(e.currentTarget)} data-action="resetCompletedTodo" className={`${styles.button} ${styles["button__resetAll"]}`} />
      <RiDeleteBin6Line onClick={(e) => buttonClick(e.currentTarget)} data-action="deleteAllTodo" className={`${styles.button} ${styles["button__deleteAll"]}`} />
    </div>
  );
}
