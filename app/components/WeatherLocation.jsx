import React from 'react'
import store from '../store'

  /* global dispatch */
// const WeatherLocation = ({currTemp1, location1}) => {
const WeatherLocation = (props) => {
  console.log('PROPS IN WEATHER LOCATION', props)
  const loc1 = props.currData.location1
  const loc2 = props.currData.location2
  const temp1 = props.currData.currTemp1
  const temp2 = props.currData.currTemp2
  const windMph1 = props.currData.windMph1
  const windMph2 = props.currData.windMph2
  const weather1 = props.currData.weather1
  const weather2 = props.currData.weather2
  const tempC1 = props.currData.currTempC1
  const tempC2 = props.currData.currTempC2
  let celsius = props.celsius

  function changeUnits() {
    celsius=!celsius
    store.getState()
  }

  return (
    <div>
      <div className="row">
        <div className="well col-lg-5">
          <table className="table table-striped table-hover ">
          <thead>
            <tr className="info">
              <th>{ loc1 }</th>
              <th> </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Weather Conditions</td>
                <td>{ weather1 }</td>
              </tr>
              { celsius
                ? <tr>
                    <td>Temperature</td>
                    <td>{ tempC1 }&#8451;</td>
                  </tr>
                : <tr>
                    <td>Temperature</td>
                    <td>{ temp1 }&#8457;</td>
                  </tr> }
                <tr>
                  <td>Wind</td>
                  <td>{ windMph2}</td>
              </tr>
            </tbody>
        </table>
        </div>
        <div className="well col-lg-5">
          <table className="table table-striped table-hover ">
          <thead>
            <tr className="info">
              <th>{ loc2 }</th>
              <th> </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Weather Conditions</td>
                <td>{ weather2 }</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>{ temp2 }&#8457;</td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>{ windMph2}</td>
              </tr>
            </tbody>
        </table>
        < /div>
      </div>
      <br />
      <button className="btn btn-primary"
              onClick={changeUnits} > Celsius
      </button>
    </div>
  )
}

export default WeatherLocation
