import styles from "../style";
import Button2 from "./Button2";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Want to join the deaf community?</h2>
      <p className={`${styles.paragraph} max-2-[470px] mt-5`}>Discover the beauty of sign language with DEAFMATRIX- a website designed to teach, connect and entertin within the Deaf community. Learn sign language from expert instructors, enjoy a curated selection of movies and TV shows with sign language interpretation, and stay updated on Deaft news, all in one inclusive platform. DEAFMATRIX to break down communication barriers, faster understanding, and celebrate the richness of Deaf culture.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button2 />
    </div>
  </section>
)

export default CTA