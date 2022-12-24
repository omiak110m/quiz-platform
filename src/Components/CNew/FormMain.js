import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnswerCard from '../Userinterface/AnswerCard';
import { makeQuiz } from '../Redux/Actions';

const FormMain = () => {
  const [count, setCount] = useState(1);

  const [answers, setAnswers] = useState([]);

  const [question, setQuestion] = useState([]);

  const [added, setAdded] = useState(false);

  const [answerLength, setAnswerLength] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (added) {
        setAdded(false);
      }
    }, 1000);

    const timeOut2 = setTimeout(() => {
      if (answerLength) {
        setAnswerLength(false);
      }
    }, 2000);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeOut2);
    };
  }, [added, answerLength]);

  // all the ref fot getting users data and information;

  const ansRef = useRef();
  const correctRef = useRef();
  const questionRef = useRef();
  const headRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // these are all the handlers used to get user info and update the complex state of our app 

  const addOptionHandler = (e) => {
    e.preventDefault();

    if (ansRef.current.value === "") {
      return;
    }

    if (answers.length >= 4) {
      setAnswers((prev) => [...prev]);
    } else {
      const Answer = {
        answer: ansRef.current.value.toUpperCase(),
        correct: correctRef.current.checked,
        id: Math.random() * 10,
      };

      setAnswers((prev) => [...prev, Answer]);
    }

    ansRef.current.value = "";
    correctRef.current.checked = false;
  };

  const addQuestionHandler = (e) => {
    e.preventDefault();

    if (questionRef.current.value === "" || answers.length === 0) {
      questionRef.current.value = "";
      return;
    }

    if (answers.length > 2) {
      const Question = {
        question: questionRef.current.value,
        answers: answers,
        id: count,
      };

      setCount((prev) => prev + 1);
      setQuestion((prev) => [...prev, Question]);
      setAnswers([]);
      setAdded(true);
      questionRef.current.value = "";
    } else {
      setAnswerLength(true);
    }
  };

  const onDeleteHandler = (id) => {
    const filteredArr = answers.filter((el) => el.id !== id);
    setAnswers(filteredArr);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    const titleValue = headRef.current.value;
    const descValue = descriptionRef.current.value;

    if (titleValue === "" || question.length <= 0) {
      return;
    }

    const Quiz = {
      title: titleValue,
      description: descValue,
      questions: question,
      id: Math.random(),
      createdOn: new Date(),
      isActive: true,
    };

    dispatch(makeQuiz(Quiz));

    setCount(1);

    headRef.current.value = "";

    navigate("/play-quiz");
  };



  return (
    <motion.div
      className="form-main-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className='form'>
        <form action=''>
          <div className='input-group input-group-lg container mb-3'>
            <input
              type="text"
              placeholder='Title'
              className="form-control"
              name='title'
              ref={headRef} />
          </div>
          <div className='input-group-lg container mb-3' >
            <textarea class="form-control" type="text" placeholder="Add Description" ref={descriptionRef}></textarea>
          </div>
          <div className='input-group-lg container mb-4'>
            <span className="input-group-text" id="inputGroup-sizing-sm">
              {" "}
              Question {count}
            </span>
            <input type="text" className="form-control" ref={questionRef} />
            {added && (
              <motion.p
                style={{ color: "green" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Question has been added!
              </motion.p>
            )}
            {answerLength && (
              <motion.p
                style={{ color: "red" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                there should be more than 2 options!
              </motion.p>
            )}
          </div>
          <div className='container'>
            <div style={{ justifyContent: 'space-evenly', display: 'flex', border: '2px solid grey', marginBottom: 20 }}>
              {answers.map((el, i) => (
                <AnswerCard
                  text={el.answer}
                  id={el.id}
                  key={i}
                  correct={el.correct}
                  onDeleteHandler={onDeleteHandler}
                />
              ))}
            </div>
          </div>

          <div className="answer-input form-padding d-flex">
            <div className="input-group mb-5 container">
              <div className="input-group-text">
                <input className='form-check-input mx-2' type='checkbox' name="correct" id="" ref={correctRef} />
                <label>correct</label>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="answer! (for correct answer click on correct checkbox :) )"
                ref={ansRef}
              />
              <button type="button" className="btn btn-info" onClick={addOptionHandler}> + </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container" >
        <button type="button" onClick={addQuestionHandler} className="btn btn-outline-primary mb-5 mx-2">
          Add Question
        </button>
        <button type="button" onClick={onSaveHandler} class="btn btn-outline-info mb-5" >
          Save
        </button>
      </div>
    </motion.div>
  )
}

export default FormMain;
