import React, { Fragment } from 'react'
import {GoogleApiWrapper ,Map, Marker, Polygon} from 'google-maps-react'
require('dotenv').config()


const AddCoords = (props) => {
    console.log(process.env.REACT_APP_API_KEY)
    return (

        <Fragment>
            <div className="radio-wrapper">
                <input type="radio"
                    onChange={props.radioFunc}
                    value="op2"
                    checked={props.value === "op2"}
                />
                <label>Add by Coordinates</label>
                <br />
            </div>


          {props.value === "op2" ?
         
         <div className="map-wrapper">
            <form onSubmit={props.submitHandler}>
              <input type="text" className="input" placeholder="Enter lat" name="lang"  onChange={props.inputFunc}/>
              <br />
              <input type="text" className="input" placeholder="Enter lan" name="lant"  onChange={props.inputFunc}/>
              <br />
              <button type="submit">Submit</button>
            </form>

            <Map
              google={props.google}
              zoom={5}
              initialCenter={{lat: 25.774, lng: -80.19}}
              center={props.marker ? props.marker[props.marker.length-1] : null}
              style={mapStyles}
              onClick={props.addMarker}
            >

              {props.marker.map((item,i) => <Marker key={i} position={item} />)}
   
              <Polygon
                paths={props.marker}
                strokeColor="blue"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="red"
                fillOpacity={0.35} 
                />                
            </Map>
           </div>
        : null } 
        </Fragment>
    )
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY)
  })(AddCoords)


  const mapStyles = {
    position:'relative',
    width:'100%',
    height:'50vh'
  };