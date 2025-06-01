import Image from "next/image";
import styles from './pages.module.css';


export default function Home() {




  return (
    <>
      <div className={styles["page-conteiner"]}>
        <div className={styles["content-lenguajes"]}>
          <select name="lenguajes" id="leng">
              <option value="es">Español</option>
              <option value="en">English</option>
          </select>
        </div>
        <section className={styles["main-section-page"]}>
          <img src="my.jpeg" alt="yo.jpg" />
          <h1>Giovanni Peirone</h1>
          <h3>Desarrollador de Software</h3>
          <div className={styles["header-buttons-main"]}>
            <button>
              Tecnologias
            </button>
            <button>
              About Me
            </button>
            <button>
              Projects
            </button>
          </div>
        </section>
      </div>
      <section className={styles["projects-section-page"]}>

      </section>
    </>
  );
}
