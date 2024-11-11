import Image from "next/image";
import styles from "@/app/styles/Skills.module.css";
import Skills from "@/app/skills.json";
const MySkills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.img_div}>
        <Image
          src="/about-img.svg"
          alt="skills"
          width={200}
          height={200}
          className={styles.img}
        />
      </div>

      <div style={{ width: "90%" }}>
        <h1 className={styles.main_heading}>MY SKILLS</h1>
        <p style={{ marginLeft: "20px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          pariatur aliquid deserunt ad in accusamus eaque at iste perferendis
          culpa, ullam quos aspernatur quas maxime quis. Autem reprehenderit
          ipsam unde.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {Skills.map((crnt, index) => (
            <div className="mx-5 w-full" key={index}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 className="text-white my-3">{crnt.title}</h5>
                <h5 className="text-white my-3">{crnt.percentage}</h5>
              </div>
              <div
                style={{
                  width: `${crnt.percentage}`,
                  height: "5px",
                  backgroundColor: "#c6ff41",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
