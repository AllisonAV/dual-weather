import axios from 'axios'

const initialState = {
  currTemp: 0
}

// ------------ Weather Constants -----------
const GOT_CURRTEMP = 'GOT_CURRTEMP'

// ------------ Weather Dispatchers -----------
export const getCurrTemp = () =>
  dispatch => {
    axios.get(`http://api.wunderground.com/api/3c8d822da4cbaeda/conditions/q/07070.json`)
    .then((res) => {
      console.log(res)
      const currTemp = res.data.current_observation.temp_f
      console.log('CURRENT TEMP', currTemp)
      dispatch(gotCurrTemp(currTemp))
    })
    .catch(err => console.error(err))
  }

// ------------ Weather Action Creators -----------
// gotCurrTemp takes a current Temperature
// and triggers the currTemp reducer with action type GOT_CURRTEMP
export const gotCurrTemp = currTemp => ({
  type: GOT_CURRTEMP,
  currTemp
})

// ------------ Weather Reducers -----------
const reducer = (state=initialState, action) => {
  console.log('IN REDUCER', state, action)
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GOT_CURRTEMP:
    newState.currTemp = action.currTemp
    break
  }
  return newState
}

export default reducer
