import React from 'react';
import { motion } from 'framer-motion';
import FormMain from './FormMain'

const CreateNewForm = () => {
  return (
    <div className="container text-center mt-5">
    <div >
      <div className=" mb-3">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create New Form
        </motion.h1>
      </div>
      <FormMain />
      </div>
    </div>
  );
};
  


export default CreateNewForm;
