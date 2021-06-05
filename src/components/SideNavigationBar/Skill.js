
const mySkills = [
   { id: 's1', name: 'HTML 5', level: 75 },
   { id: 's2', name: 'CSS 3', level: 50 },
   { id: 's3', name: 'SCSS', level: 45 },
   { id: 's4', name: 'Java Script', level: 60 },
   { id: 's5', name: 'React', level: 45 },
   { id: 's6', name: 'Graph QL', level: 10 },
   { id: 's7', name: 'Deep Learning', level: 25 }
];

const Skill = () => {
   // var value;
   // if (props.value <= 40) {
   //    value = 'beginner';
   // }
   // else if (props.value > 40 && props.value <= 75) {
   //    value = 'intermediate';
   // }
   // else {
   //    value = 'advance';
   // }
   return (
      <div className='skill-container'>
         <div>
            {
               mySkills.map((skill, index) => (
                  <div key={skill.id} >
                     <div> {skill.name} </div>
                     <div> {skill.value} </div>
                  </div>
               ))
            }
         </div>
      </div >
   )
};

export default Skill;