import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location1: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetWeather = this.handleGetWeather.bind(this)
// test
    console.log('PROPS IN WEATHER', props)
  }

// create a function to call get Curr Temp reducer
  handleGetWeather = function(e) {
    e.preventDefault()
   // this.props.setLocation(this.state.location1)
    this.props.getCurrTemp()
    browserHistory.push(`/weather/${this.state.location1}`)
  }
// this.props.getCurrTemp
  handleChange = function(e) {
    e.preventDefault()
    this.setState({
      location1: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form id='location' className="form-horizontal">
        <h1>Welcome to my dual weather site!! </h1>
          <fieldset>
            <legend>First Location</legend>
            <div className="form-group">
              <label className="col-lg-2 control-label">Location</label>
              <div className="col-lg-4">
                <input type="text"
                        placeholder="location"
                        className="form-control"
                        onChange={ this.handleChange }
                        name="location"/>
              </div>
            </div>
            <hr />
            <button className="btn"
                    type="submit"
                    form="location"
                    onClick={this.handleGetWeather}>Submit
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}
