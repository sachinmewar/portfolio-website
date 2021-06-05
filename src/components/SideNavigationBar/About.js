import './About.css';
import Skill from './Skill.js';

const About = () => {
   return (
      <div className='about-container'>
         <div id='profile-details'>
            <img src='/Ell.jpg' alt='Loading Pic failed' />
            <div id='details'>
               <p> Name : Sachin Mewar </p>
               <p> DOB: 12/05/1999 </p>
               <p> Nationality: Indian </p>
               <p> Language: English, Hindi </p>
            </div>
         </div>

         <p id='about-me'>
            Hi! My name is Sachin Mewar and I am a front end web developer.
            I design and build UI.
            I am a passionate learner who loves to learn about new technologies and to gain new skills.
            Innovation is my passion.
            I am from India.
         </p>

         <div id='skills'>
            <h2> My Skills </h2>
            <Skill />
         </div>
      </div >
   )
};

export default About;