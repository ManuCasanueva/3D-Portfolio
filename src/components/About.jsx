import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from "../styles"
import { services } from '../constants'
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'
// import logoReact from "../assets/react.png"


const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full " >
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index,0.74)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt >
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      variants={fadeIn("","",0.1,1)}
      >
I'm a versatile full-stack developer skilled in JavaScript, boasting expertise in frameworks like React, Node.js, Tailwindcss. With 3 years of experience, I'm particularly passionate about frontend development, constantly pursuing innovative solutions and driven by a thirst for continuous learning. I excel in collaborating closely with clients to engineer efficient, scalable, and user-friendly solutions.  Let's work together to bring your ideas to life!
      </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
    
     {services.map((service,index) => (
      <ServiceCard key={service.title} index={index} icon={service.icon}  title={service.title} {...services}/>
     ))}
    </div>

    </>
  )
}

export default SectionWrapper(About,'about')