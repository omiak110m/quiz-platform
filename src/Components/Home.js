import React from 'react'
import HomeCard from './Userinterface/HomeCard'
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <HomeCard
        color="grey"
        heading="Create New Quiz"
        path="/create-new"
        delay={0.15}
        image={img1}
        size={"650px"}
      />
      <HomeCard
        color="grey"
        heading="My Quizzes"
        path="/my-quizzes"
        delay={0.15}
        image={img2}
        size={"650px"}
      />
      <HomeCard
        color="grey"
        heading="Play Quiz"
        path="/play-quiz"
        delay={0.15}
        image={img3}
        size={"650px"}
      />
    </div>
    
  )
}

export default Home
