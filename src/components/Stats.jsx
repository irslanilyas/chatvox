import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 gap-x-20`}>
    {stats.map((stat => (
      <div key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row mt-3`}>
   
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
        <p className="font-poppins font-normal xs:text-[25px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-0">{stat.title}</p>
      </div>
    )))}
  </section>
)


export default Stats