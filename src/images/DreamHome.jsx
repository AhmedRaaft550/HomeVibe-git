import React from 'react'
import dreamHomeImg from './dreamhome.jpg'
import { motion } from "framer-motion";

console.log(motion)


function DreamHome() {
  return (
<motion.div className="dream-home"
 initial={{ x: "-90%", opacity: 0, scale: 0.8, rotate: -10 }}
 whileInView={{
   opacity: 1,
   x: 0,
   scale: 1,
   rotate: 0
 }}
 transition={{
   duration: 2,
   ease: "easeOut", // Smooth easing for a natural animation
   delay: 0.2, // Small delay before the animation starts
 }}
>

<motion.img src= {dreamHomeImg} alt="" loading='lazy'
 initial={{ opacity: 0, scale: 0.8 }}
 whileInView={{
   opacity: 1,
   scale: 1,
 }}
 transition={{
   duration: 1,
   delay: 0.3,
   ease: "easeOut",
 }}
/>
<p className='dream-text'>Tailor Your Comfort <br/> Customize Your Perfect Piece, <br/> Just the Way You Want It! </p>
</motion.div>
  )
}

export default DreamHome
