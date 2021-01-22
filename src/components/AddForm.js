import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../actions/addSmurfs';

function AddForm(props) {
  const [input, setInput] = useState({name: "", age: 1, height: ""});

  function changeHandler(e) {
    if (e.target.name === "name") {
      setInput({...input, name: e.target.value})
    }
    else if (e.target.name === "age") {
      setInput({...input, age: e.target.value})
    }
    else {
      setInput({...input, height: e.target.value})
    }
  }

  function addSmurf(e) {
    e.preventDefault();
    props.addSmurfs(input)
  }

  return(
    <form onSubmit={addSmurf}>
      <h3>Add a Smurf</h3>
      <label htmlFor="name">Name:
      <input
        name="name"
        id="name"
        type="text"
        value={input.name}
        onChange={changeHandler}
      />
      </label>
      
      <label htmlFor="age">Age:
      <input 
        name="age"
        id="age"
        type="number"
        value={input.age}
        onChange={changeHandler}
      />
      </label>

      <label htmlFor="height">Height:
      <input 
        name="height"
        id="height"
        type="text"
        value={input.height}
        onChange={changeHandler}
      />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default connect(null, {addSmurfs})(AddForm);


//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.