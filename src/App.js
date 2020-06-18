import React, { Component } from 'react'
import AddPlace from './AddPlace/AddPlace'
import AddCoords from './AddCoords/AddCoords';
import './App.css';
require('dotenv').config()

export class App extends Component {
  state = {
    place:null,
    coordinates: '',
    value:'',
    marker:[],
    markerPos:'',
    lang:'',
    lant:'',
    submitted:false
  }

  radioHandler = (e) => {
   this.setState({value: e.target.value, marker:[]})
  }


  addMarker = (t, map , coords) => {
    let markerArr
    let { latLng } = coords
    let lat = latLng.lat()
    let lng = latLng.lng()

    if(this.state.marker.length < 3){
       markerArr = [...this.state.marker, {lat,lng}]
       this.setState({marker:markerArr, markerPos:{lat,lng} })
    }
  }


  inputHandler = (e) => {
   console.log(e.target.value)
   this.setState({[e.target.name]: e.target.value})
  }


  clearMarkerArray = () => {
    this.setState({marker:[]})
  }


  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      submitted:true
    })
  }


  render() {
    let coords = this.state.coordinates
    console.log(process.env.REACT_APP_API_KEY)
  
    return (
      <div className="App">

        <div className="wrapper">
          <AddPlace
            apiKey={process.env.API_KEY}
            value={this.state.value}
            radioFunc={this.radioHandler}
            marker={this.state.marker}
            addMarker={this.addMarker}
            />

        <AddCoords
          value={this.state.value}
          radioFunc={this.radioHandler}
          marker={this.state.marker}
          addMarker={this.addMarker}
          submitHandler={this.submitHandler}
          inputFunc={this.inputHandler}
        />
      </div>


    {this.state.coordinates ? <p>Lat: {coords.lat}, lng: {coords.lng}</p> : null}
       </div>
    )
  }
}

export default App