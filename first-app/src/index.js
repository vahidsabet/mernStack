import React from 'react';
import ReactDOM  from 'react-dom/client';
import SingleComment from './singleComment';
import UserCard from './UserCard';

// const App = () =>{
//   const buttonText={text:'Submit'};

//   return(
//     <div>
//       <label htmlFor="name" className='label'>Enter email</label>
//       <input type="text" id="name"/>
//       <button style={{backgroundColor:'red',color:'white'}}>
//         {buttonText.text}
//       </button>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.querySelector('#root'));

const App =()=>{
  return(
    <div className='ui comments'>
      <UserCard>
        <SingleComment name="vahid" date="5 pm" />
      </UserCard>
      <UserCard>
        <SingleComment name="saeed" date="15 pm"/>
      </UserCard>
      <UserCard>
        <SingleComment name="hamid" date="3 pm"/>
      </UserCard>

    </div>
  )
}
//root.render(<App/>,document.querySelector('#root'))
root.render(<App/>)