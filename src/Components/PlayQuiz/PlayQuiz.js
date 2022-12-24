import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startQuiz, buildName } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const QuizTitle = ({ title, id }) => {

  const selectedQuiz = useRef();
  const dispatch = useDispatch();

  const handelSelected = () => {
    const selected = selectedQuiz.current.checked;

    if (!selected) {
      return;
    };

    dispatch(startQuiz(id));
  };

  return (
   
      <div className="form-check mb-3 container">
        <input
          type="radio"
          className='form-check-input'
          name=''
          id=''
          ref={selectedQuiz}
          onClick={handelSelected} />
        <label className="form-check-label" style={{fontWeight: 'bold'}}>
          {title.toUpperCase()}
        </label>
      </div>
 
  )
}

const PlayQuiz = () => {

  const name = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quiz = useSelector((state) => state.reducer.quiz);

  const getNameHandler = () => {

    if (name.current.value === "") {
      alert("Please enter a name!");
      return;
    }

    if (quiz.length > 0) {
      dispatch(buildName(name.current.value));
      navigate("/quiz");
    }
  };

  const emptyMsg = (
    <p style={{ color: "red" }}>
      There are Currently No Quiz! Please make some new quizzes!
    </p>
  );


  return (
    <motion.div
      className="play-quiz-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className='container text-center'>
        <div className='mt-5 mb-3'>
          <h1>Title of the Quiz</h1>
        </div>
        <div className='mb-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>Enter Your Name</span>
          <input
            className='form-control '
            type="text"
            ref={name}
          />
        </div>
        </div>

        <div className='container'>
          {quiz.length === 0
            ? emptyMsg
            : quiz
              .filter((el) => el.isActive === true)
              .map((el) => (
                <QuizTitle title={el.title} key={el.id} id={el.id} />
              ))}
        </div>


        <div className='container text-center'>
          <button
            type="button"
            onClick={getNameHandler}
            className="btn btn-primary mb-3"
          >
            Start Quiz
          </button>
        </div>
      
    </motion.div>
  )
}

export default PlayQuiz
