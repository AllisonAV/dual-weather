import React, { Component } from 'react'

export default class WeatherLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      celsius: false
    }

    this.changeUnits = this.changeUnits.bind(this)
  }

  changeUnits = function() {
    this.setState({celsius: !this.state.celsius})
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="well col-lg-5">
            <table className="table table-striped table-hover ">
            <thead>
              <tr className="info">
                <th>{ this.props.currData.location1 }</th>
                <th> </th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>Weather Conditions</td>
                  <td>
                    <img src={this.props.currData.icon1}/>
                    { this.props.currData.weather1 }
                  </td>
                </tr>
                { this.state.celsius
                  ? <tr>
                      <td>Temperature</td>
                      <td>{ this.props.currData.currTempC1 }&#8451;</td>
                    </tr>
                  : <tr>
                      <td>Temperature</td>
                      <td>{ this.props.currData.currTemp1 }&#8457;</td>
                    </tr> }
                { this.state.celsius
                  ? <tr>
                      <td>Wind from the {this.props.currData.windDir1}</td>
                      <td>{ this.props.currData.windKph1} KPH</td>
                    </tr>
                  : <tr>
                      <td>Wind from the {this.props.currData.windDir1}</td>
                      <td>{ this.props.currData.windMph1} MPH</td>
                    </tr> }
              </tbody>
          </table>
          </div>
          <div className="well col-lg-5">
            <table className="table table-striped table-hover ">
            <thead>
              <tr className="info">
                <th>{ this.props.currData.location2 }</th>
                <th> </th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>Weather Conditions</td>
                  <td>
                    <img src={this.props.currData.icon2}/>
                    { this.props.currData.weather2 }
                  </td>
                </tr>
                { this.state.celsius
                  ? <tr>
                      <td>Temperature</td>
                      <td>{ this.props.currData.currTempC2 }&#8451;</td>
                    </tr>
                  : <tr>
                      <td>Temperature</td>
                      <td>{ this.props.currData.currTemp2 }&#8457;</td>
                    </tr> }
                { this.state.celsius
                  ? <tr>
                      <td>Wind from the {this.props.currData.windDir1}</td>
                      <td>{ this.props.currData.windKph2} KPH</td>
                    </tr>
                  : <tr>
                      <td>Wind from the {this.props.currData.windDir2}</td>
                      <td>{ this.props.currData.windMph2} MPH</td>
                    </tr> }
              </tbody>
          </table>
          < /div>
        </div>
        <br />
        { this.state.celsius
          ? <button className="btn btn-primary"
                onClick={this.changeUnits} > Fahrenheit
            </button>
          : <button className="btn btn-primary"
                onClick={this.changeUnits} > Celsius
        </button> }
      </div>
    )
  }
}
