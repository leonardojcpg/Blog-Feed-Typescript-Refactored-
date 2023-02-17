import styles from "./sidebar.module.css";
import profileImg from "../../assets/profileImg.svg";
import { PencilLine } from "phosphor-react";
import Avatar from "../Avatar";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={profileImg} alt="" />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/102674410?v=4"/>
        <strong>Leonardo Gomes</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
            <PencilLine size="20"/>
            Editar seu perfil</a>
      </footer>
    </aside>
  );
};

export default Sidebar;
