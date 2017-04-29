import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.initMap = this.initMap.bind(this)
  }

  initMap() {
    var map
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7413549, lng: -73.9980244},
      zoom: 13
    })
  }

  render() {
    return (
      <div id="map">
      { this.initMap() }
      </div>
    )
  }
}
