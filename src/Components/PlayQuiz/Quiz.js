import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { seeAnswers, reBoot } from '../Redux/Actions';
import { motion } from 'framer-motion';
import img from '../../Images/congo.webp';
import { useNavigate } from 'react-router-dom';
import { QuizCard } from './QuizCard';

export const ResultModel = ({ name }) => {
  const results = useSelector((state) => state.reducer.answers);
  const mapped = results.map((el) => el.isCorrect);

  const navigate = useNavigate();
  const disptach = useDispatch();

  const resetQuizHandler = () => {
    disptach(reBoot());
    navigate("/");
  };

  return (
    <div className="container text-center border border-dark border-5" style={{ marginTop: '100px' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className='mt-3'>
          <img src={img} alt=" congrulations" width={"450px"} />
          <h3>{name.toUpperCase()}</h3>
          <p>
            Your Score is {mapped.filter((el) => el === true).length} out of {' '}
            {mapped.length}
          </p>
        </div>
        <div className="text-center" style={{ marginBottom: '20px' }}>
          <button className='btn btn-primary' onClick={() => resetQuizHandler()}>Okay</button>
        </div>
      </motion.div>
    </div>
  )
}



const Quiz = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState({});

  const quiz = useSelector((state) => state.reducer.playQuiz).questions;
  const name = useSelector((state) => state.reducer.name);

  const dispatch = useDispatch();


  const nextQuestionHandler = () => {
    dispatch(seeAnswers(finalAnswer));

    if (count >= quiz.length - 1) {
      setShowModal(true);
      setCount((prev) => prev);
    } else {
      setCount((prev) => prev + 1);
    }
  };


  const getAnswerHandler = (answer, correct, id) => {
    const Answer = {
      answer: answer,
      isCorrect: correct,
      id: id,
    };
    setFinalAnswer(Answer);
  };


  const question = quiz[count].question;
  const answers = quiz[count].answers;


  return (
    <div>
      <div className="container text-center">
        <div className="container mb-5">
          <h3>Hii! {name.toUpperCase()}</h3>
        </div>

        <QuizCard
          nextQuestionHandler={nextQuestionHandler}
          count={count}
          question={question}
          answers={answers}
          getAnswerHandler={getAnswerHandler}
          length={quiz.length}
          selectedId={finalAnswer.id ? finalAnswer.id : ""}
        />

      </div>
      {showModal && <ResultModel name={name} />}
    </div>

  );
};

export default Quiz;
