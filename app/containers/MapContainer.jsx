import Map from 'google-maps-react'
import React, { Component } from 'react'

// ...

export class MapContainer extends Component {}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyALdYhAuSJu4JnAM_plBiHdoHVbiE1L0yY'
})(MapContainer)
