import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Why did we build <br className='sm:block hidden' /> this app?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Faizy Legend, a deaf Content Creator and Entrepreneur, seeks to revolutionize communication through an innovative speech-to-text app. Motivated by personal experiences of feeling excluded, Faizy envisions a tool that empowers the deaf community and promotes global inclusivity. His commitment reflects a belief in technology's power to break down barriers and create a more connected world.</p>
      
    <Button
    styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img
      src={card}
      alt='card'
      className='w-[100%] h-[100%]' />

    </div>

  </section>
)

export default CardDeal