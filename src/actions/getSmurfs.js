import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";

export const getSmurfs = (value) => dispatch => {
  return axios.get('http://localhost:3333/smurfs')
  .then(res => {
    const action = {type: GET_SMURFS, payload: res.data};
    dispatch(action);
  })
  .catch(err=>console.log(err));
}