import React from 'react'

const AnswerCard = ({ id, answer, correct, getAnswerHandler, selectedId }) => {
  const onclickHandler = () => {
    getAnswerHandler(answer, correct, id);
  };

  return (
    <div
      onClick={onclickHandler}
      style={{ background: `${selectedId === id ? "green" : " "}` }}
    >
      <span
        style={{ background: `${selectedId === id ? "blue" : " "}` }}
      ></span>
      <p style={{marginBottom: 20, paddingTop: 5, paddingBottom: 5}}>{answer}</p>
    </div>
  );
};

export const QuizCard = ({
  count, nextQuestionHandler, question, answers, getAnswerHandler, length, selectedId,
}) => {
  return (
    <div className="play-quiz-questions border border-dark border-5">
      <div style={{fontWeight: 'bold', color: 'white', backgroundColor: 'black', paddingTop: 5, paddingBottom: 5}}>
        <h4>Please select only One Answer!</h4>
      </div>
      <div className='mt-4 mb-4' style={{backgroundColor: 'skyblue', cursor: 'pointer', paddingTop: 3, paddingBottom: 3}}>
        <h3>{count + 1}. {question}</h3>
      </div>

      <div className="mb-3" style={{cursor: 'pointer' }}>
        <h5>{answers.map((el, i) => (
          <AnswerCard
            key={el.id}
            id={el.id}
            correct={el.correct}
            answer={el.answer}
            getAnswerHandler={getAnswerHandler}
            selectedId={selectedId} />
        ))}</h5>
      </div>
      <div className="quiz-next-btn">
        <div className="quiz-question-no">
          Question {count + 1}/{length}
        </div>
        <div className="next-question">
          <button type='button' className='btn btn-primary mb-3' onClick={nextQuestionHandler}>Next Question</button>
        </div>
      </div>
    </div>
  );
};
  
 


