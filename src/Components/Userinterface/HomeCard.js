import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const HomeCard = ({ color, path, delay, image, size, heading }) => {
  return (
    <motion.div
      className='home-card d-flex'
      style={{ backgroundColor: `${color}` }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: delay }}
    >
      <NavLink to={path} className='home-card-heading'>
        <div>
          <h1>{heading}</h1>
        </div>
      </NavLink>
      <div className='home-img'>
        <img src={image} alt="img" width={size ? size : ""} />
      </div>
    </motion.div>
  )
}

export default HomeCard
