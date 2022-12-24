import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CreateNewForm from './CreateNewForm';

const MakeNewModel = ({ handelModel }) => {
  return (
    <div className='text-center' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px',
    }}>
      <motion.div
        className=''
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button type="button" className="btn btn-outline-primary btn-lg" onClick={handelModel}>
          MCQ (Single Correct)
        </button>
      </motion.div>
    </div>
  );
};

const CreateNew = () => {
  const [viewModel, setViewModel] = useState(true);

  const handelModel = () => {
    setViewModel(false);
  };

  return (
    <div>
      {viewModel ? (
        <MakeNewModel handelModel={handelModel} />
      ) : (
        <CreateNewForm />
      )}
    </div>
  );
};

export default CreateNew;
