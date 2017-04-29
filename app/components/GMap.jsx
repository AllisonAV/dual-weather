import React, { Component, ReactDOM } from 'react'

export default class GMap extends Component {
  constructor(props) {
    super(props)

    const {lat, lng} = this.props.initialCenter
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
    console.log('PROPS IN MAP', props)
    this.loadMap = this.loadMap.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }
  }

  componentDidMount() {
    this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      console.log('IN LOAD MAP')
      console.log('PROPS', this.props)
      // google is available
      const {google} = this.props
      const maps = google.maps

      const mapRef = this.refs.map
      const node = ReactDOM.findDOMNode(mapRef)

      let { initialCenter, zoom } = this.props
      const { lat, lng } = this.state.currentLocation
      const center = new maps.LatLng(lat, lng)
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig)
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

GMap.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
}

GMap.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
}
