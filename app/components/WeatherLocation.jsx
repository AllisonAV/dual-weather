import React from 'react'

  /* global dispatch */
// const WeatherLocation = ({currTemp1, location1}) => {
const WeatherLocation = (props) => {
  console.log('PROPS IN WEATHER LOCATION', props)
  return (
    <div>
      <h1>Weather in { props.params.location } is { props.currTemp }</h1>
    </div>
  )
}

export default WeatherLocation
