import React from 'react';
import Smurf from './Smurf';
import {useSelector} from 'react-redux';

function SmurfDisplay() {
  const smurfsDisplay = useSelector(state=>state)
  if (!smurfsDisplay) {
    return (<div>Loading...</div>)
  }
  return(
    <div>
      Smurf Display
       {smurfsDisplay.map((smurf, idx)=>{
        return <Smurf key={idx} smurf={smurf}/>
      })}
    </div>
  )
}

export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.