
import './App.css';
import React, { useState } from 'react';

function RenderSubject(props) {
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const handleChange = (e) => {
    setSubject([e.target.value])
  }
  const addSubject = () => {
    setSubjects([...subjects, subject])
    clearState();

  }
  const clearState = () => {
    setSubject('');
  };
  return (
    <div >
      <input type="text" onChange={handleChange} value={subject}/><button onClick={addSubject}>ADD</button>
       
      {
      subjects && <ul key={props.uniqueKey}> 
  { subjects &&  subjects.map((s, j)=>{
      return(
        <li key-={j}>{s}</li>
      )
    })       }
     </ul>
      }
      

     
    </div>
  )
}

function RenderSemester() {
  const semesters = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6']
  return (
    <ul>
      {semesters.map((d,i) => {
        return (

          <li key={i}>
            <div>
              {d}
              {
                <RenderSubject uniqueKey={i+1}/>
              }
            </div>
          </li>


        )
      })
      }
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <RenderSemester />
    </div>
  );
}

export default App;
