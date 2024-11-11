import styles from "@/app/styles/About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h1>about</h1>
        <div className={styles.main}>
          <div className={styles.img_div}>
            <Image
              src="/about-img.svg"
              alt="image"
              height={300}
              width={300}
              className={styles.image}
            />
          </div>

          <div className={styles.para_div}>
            <h2 className={styles.heading}>ABOUT US</h2>
            <p className={styles.para}>
              Hello! I’m Khulood Maqbool, a front-end developer with expertise
              in HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on
              creating visually appealing and user-friendly web experiences.
              With a range of projects from e-commerce to interactive
              applications, I aim to exceed client expectations and continuously
              grow my skills. Outside of coding, I enjoy exploring design
              trends, learning about the Metaverse, and collaborating with other
              creatives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
