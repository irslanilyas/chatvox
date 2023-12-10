
import React from "react";
import styles from '../style'
import { discount, robot } from "../assets";
import GetStarted from './GetStarted';
import TypingSlogan from "./TypingSlogan";


const Hero = () =>

  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
        <a href="https://www.instagram.com/faizylegend/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
          <img
            src={discount}
            alt="discount"
            url="https://www.instagram.com/faizylegend/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            className="w-[32px] h-[32px]"
          />
        </a>
        <p className={`${styles.paragraph} ml-2 uppercase`}>
          <span className="text-white">Founder of </span>
          {""}
          <span className="text-white">@</span>
          Faizylegend
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" /> {" "}
          <span className="text-gradient">Generation
          </span> {" "}

        </h1>

      </div>
      <h1>
        <TypingSlogan />
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our real-time screen captioning service transforms spoken words into on-screen text for live events and meetings. Additionally, we offer text-to-speech capabilities and live conversation capture. With built-in translation support for languages like Spanish, French, and German, we facilitate seamless communication in diverse linguistic environments.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mt-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[`00%] relative z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>

export default Hero;
