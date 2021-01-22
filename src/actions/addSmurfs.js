import axios from "axios";

export const ADD_SMURFS = "ADD_SMURFS";

export const addSmurfs = (value) => dispatch => {
  return axios.post('http://localhost:3333/smurfs', value)
  .then(res => {
    console.log(res)
    const action = {type: ADD_SMURFS, payload: res.data};
    dispatch(action);
  })
  .catch(err=>console.log(err));
}