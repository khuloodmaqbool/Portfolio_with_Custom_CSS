import styles from "@/app/styles/Projects.module.css";
import ProjectsData from "@/app/projects.json";
import { IoCodeSlash } from "react-icons/io5";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <h1
        style={{ padding: "0px 20px", marginTop: "20px" }}
        className={styles.main_heading}
      >
        MY PROJECTS
      </h1>
      <p style={{ padding: "0px 20px 20px 20px" }}>
        Crafting Engaging Web Experiences with Precision and Creativity.
        Delivering Responsive and User-Friendly Solutions Tailored to Your
        Needs.
      </p>
      <div className={styles.main_div}>
        {ProjectsData.map((crnt) => {
          return (
            <>
              <div className={styles.card}>
                <div
                  className={styles.img_div}
                  style={{
                    backgroundImage: `url('${crnt.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <h5 className={styles.title}>{crnt.title}</h5>
                <p>{crnt.para}</p>
                <div className={styles.btn_link_div}>
                  <Link href={crnt.liveLink}>
                    <button className={styles.visit_btn}>Visit Now</button>
                  </Link>
                  <Link href={crnt.gitHubLink}>
                    <div className={styles.git_link}>
                      <IoCodeSlash style={{ width: "25px", height: "25px" }} />
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Projects;
