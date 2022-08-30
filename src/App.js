import React,{useState} from 'react';
import './App.css';

const App =()=>{

const [userRegistration,setUserRegistration]=useState({
  username:"",
  dept:"",
  rating:"",
});


const [records,setRecords] =useState([]);

  const handleInput =(e)=>{
      const name =e.target.name;
      const value =e.target.value;
      setUserRegistration({...userRegistration,[name] :value});

  }

  const handleSubmit=(e)=>{

     e.preventDefault();

     const newRecord = {...userRegistration,id:new Date().getTime().toString()}

     setRecords([...records,newRecord]);
     setUserRegistration({username:'', dept:"", rating:""})
  }


  return(
    <>
    <h1>EMPLOYEE FEEDBACK FORM</h1>
    <form action ="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Name:</label>
        <input type="text" autoComplete="off"
        value={userRegistration.username}
        onChange ={handleInput}
         name='username' id='username'required/>
      </div><br></br>

      <div>
        <label htmlFor='dept'>Department:</label>
        <input type="text" autoComplete="off"
        value={userRegistration.dept}
        onChange ={handleInput}
         name='dept' id='dept' required/>
      </div><br></br>

      <div>
        <label htmlFor='rating'>Rating:</label>
        <input type="number" autoComplete="off"
        value={userRegistration.rating}
        onChange ={handleInput}
         name='rating' id='rating' required/>
      </div><br></br>
      <button type="submit">Submit</button>

    </form>
    <div className='box'>
      {
        records.map((curElem)=>{
          const {id,username,dept,rating} = curElem;
          return(
            <div className='flex' key={id}>
              <p>Name:{username}|</p>
              <p>Department:{dept}|</p>
              <p>Rating:{rating}</p>
            </div>
          )
        })
      }
    </div>
    </>
  );
}
export default App;