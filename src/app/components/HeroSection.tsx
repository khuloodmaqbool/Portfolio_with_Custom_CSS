"use client";
import styles from "../styles/Home.module.css";
import { FiCodesandbox } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <>
      <div className={styles.main}>
        {/* left */}
        <div className={styles.left}>
          <div className={styles.img_div}></div>
          <h5
            style={{
              fontFamily: "Anybody",
              fontWeight: "800",
              margin: "10px 0px 0px 0px",
              fontSize: "20px",
            }}
          >
            KHULOOD MAQBOOL
          </h5>
          <h4 style={{ color: "rgba(139, 139, 139, 1)" }}>
            Front End Developer
          </h4>

          <p style={{ marginTop: "20px" }}>
            Specializing in modern web technologies like HTML, CSS, JavaScript,
            and React to create efficient, user-friendly, and responsive
            websites.
          </p>
          <Link href="/contact">
            <button className={styles.buttonStyling}>
              Get In Touch
              <span
                style={{
                  backgroundColor: "rgba(198, 255, 65, 1)",
                  borderRadius: "50%",
                  height: "100%",
                  color: "black",
                  padding: "3px",
                }}
              >
                <BsArrowUpRight />
              </span>
            </button>
          </Link>
        </div>

        {/* right  */}
        <div className={styles.right}>
          <h1 className={styles.main_heading}>
            FRONT END <br />
            <span style={{ color: "rgb(148 163 184)" }}>Developer</span>
          </h1>
          <p>
            Hi! I am Khulood Maqbool, a Front-End Developer specializing in HTML,
            CSS, JavaScript, and TypeScript. I build efficient, responsive
            websites and scalable web apps using React and Next.js, delivering
            powerful user experiences
          </p>
          <div className={styles.boxesDiv}>
            <div className={styles.boxes}>
              <FiCodesandbox
                style={{ color: "white", width: "40px", height: "40px" }}
              />
              <h2 style={{ color: "white" }}>
                Crafting responsive, visually engaging interfaces with HTML,
                CSS, JavaScript, TypeScript, React, and Next.js
              </h2>
            </div>
            <div
              style={{ backgroundColor: "rgba(198, 255, 65, 1)" }}
              className={styles.boxes}
            >
              <FiCodesandbox
                style={{ color: "white", width: "40px", height: "40px" }}
              />
              <h2>
                Ensuring seamless, user-focused experiences by blending
                functionality with modern design
              </h2>
            </div>
          </div>

          <div className={styles.customer_div}>
            <div>
              <h2
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Anybody",
                  fontSize: "2cqmax",
                }}
              >
                WHAT I DO FOR MY CUSTOMERS
              </h2>
              <p>
                Crafting seamless and visually appealing web experiences that
                drive results.
              </p>
            </div>

            <div className={styles.skills}>
              <h5 className={styles.what_i_do}>Responsive Web Design</h5>
              <h5 className={styles.what_i_do}>Performance Optimization</h5>
              <h5 className={styles.what_i_do}>Interactive UI</h5>
              <h5 className={styles.what_i_do}>Custom Styling & Branding</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
