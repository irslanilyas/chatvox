import { apple, bill, google } from '../assets';
import styles, { layout } from "../style";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing"
        className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>There are other speech-to-text apps. <br className="sm:block hidden" />What's different about us?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience the thrill of seamless, face-to-face communication with our app! Say goodbye to the constant phone-face shuffle – our real-time captions keep the conversation flowing effortlessly, allowing you to stay fully engaged with the person in front of you. Embrace the excitement of distraction-free, dynamic interactions!
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img 
        src={apple}
        alt='app_store'
        className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
         <img 
        src={google}
        alt='google_play'
        className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>

      </div>
    </div>
  </section>
)

export default Billing