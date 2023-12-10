import { useTranslation } from '../hooks/useTranslation';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import SquigglyLines from './SquigglyLines'

export default function TypingSlogan() {
    return (
        <div>
            <span className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">

                <TypeAnimation
                    sequence={[
                        'Live Caption',
                        1000,
                        ('Text-to-Speech'),
                        1000,
                        ('Speech-to-Text'),
                        1000,
                        ('Translator'),
                        1000,
                        () => {
                            // console.log('Done typing!')
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="relative text-white"
                />
            </span>
            {/*{t('Content')}*/}

        </div>
    )
}