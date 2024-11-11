import { CgMail } from "react-icons/cg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import styles from "@/app/styles/Contact.module.css";
import Image from "next/image";
const ContactPage = () => {
  const contact = [
    {
      text: "khuloodmaqbool3@gmail.com",
      icon: <CgMail className={styles.icon_styles} />,
    },
    {
      text: "+92 3193885232",
      icon: <MdOutlineLocalPhone className={styles.icon_styles} />,
    },
    {
      text: "Karachi, Pakistan",
      icon: <IoLocationOutline className={styles.icon_styles} />,
    },
  ];

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className={styles.main_div}>
          <Image
            src="/contact.svg"
            alt="about img"
            width={200}
            height={200}
            className={styles.img}
          />

          <div>
            <h1 className={styles.main_heading}>GET IN TOUCH</h1>
            <p style={{ margin: "20px 0px" }}>
              Have a project in mind or just want to say hello? Lets connect
              and explore how we can create impactful web experiences together.
            </p>

            <div className={styles.contact_div}>
              {contact.map((crnt) => {
                return (
                  <>
                    <div className={styles.contact}>
                      <div>{crnt.icon}</div>
                      <p>{crnt.text}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
