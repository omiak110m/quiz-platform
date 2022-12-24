import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { dropQuiz } from '../Redux/Actions';
import { Quizzes } from './Quizzes';


const DeleteModel = ({ closeModel, id }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(dropQuiz(id));
    closeModel();
  };

  return (
    <div className="container text-center">
      <motion.div
        className="delete-model-main"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container border border-dark border-4">
          <h2>Are you sure you want to delete?</h2>
          <p style={{color: 'red'}}>
            " Deleting this will result in loosing the file permanently and is not
            recoverable "
          </p>
          <div className='mb-2'>
            <button  type="button" class="btn btn-success mx-3" style={{backgroundColor: 'green'}} onClick={() => onDeleteHandler(id)}>Yes</button>
            <button  type="button" class="btn btn-danger" style={{backgroundColor: 'red'}} onClick={() => closeModel()}>No</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const MyQuizzes = () => {

  const [model, setModel] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const Quiz = useSelector((state) => state.reducer.quiz);

  const openModel = (id) => {
    setDeleteId(id);
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };

  return (
    <>
      {model && <DeleteModel closeModel={closeModel} id={deleteId} />}
      <motion.div
        className="my-quiz-container d-flex"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className='container text-center' >
          <div>
            <h1 style={{ marginTop: "25px", marginBottom: "40px" }}>My Quizes</h1>
          </div>

          <div>
            {Quiz.length === 0 ? (
              <p style={{ color: "red" }}>Currently there are no quizes!</p>
            ) : (
              Quiz.map((el, i) => (
                <Quizzes
                  key={el.id}
                  title={el.title}
                  id={el.id}
                  active={el.isActive}
                  date={el.createdOn}
                  serial={i + 1}
                  openModel={openModel}
                />
              ))
            )}
          </div>
        </div>
      </motion.div>
      <div className='container mt-5 text-center'>
        <a
          style={{ bottom: '10px', width: '50%'}}
          class="btn btn-primary mb-5" href="/create-new" role="button"
        >
          Create New Quiz</a>
      </div>
    </>
  )
}

export default MyQuizzes
