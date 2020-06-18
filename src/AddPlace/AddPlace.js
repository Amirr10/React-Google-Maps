import React, { Fragment } from 'react'
import { GoogleComponent } from 'react-google-location' 
import {GoogleApiWrapper ,Map, Marker} from 'google-maps-react'
require('dotenv').config()


 const AddPlace = (props) => {
    return (
        
        <Fragment>
        <div className="radio-wrapper">
            <input type="radio"
                onChange={props.radioFunc}
                value="op1"
                checked={props.value === "op1"}
            />
            <label>Add by Place</label>
        </div>

            {props.value === "op1" ?
                <div className="map-wrapper">
                <GoogleComponent
                    apiKey={process.env.REACT_APP_API_KEY}
                    language={'en'}
                    country={'country:in|country:us|country:il'}
                    placeholder={'Start typing location'}
                /> 
                
                <div style={{position:'relative', top:'40px'}}>
                <Map
                    google={props.google}
                    zoom={6}
                    initialCenter={{ lat: 39.9525839, lng: -75.1652215 }}
                    style={mapStyles}
                    onClick={props.addMarker}
                >

                    {props.marker.map((item, i) => 
                        <Marker key={i} position={item}
                    />)}

                </Map>
                </div>

                </div>
             : null}
      
        </Fragment>
    )
}


export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY)
  })(AddPlace)


 
  const mapStyles = {
    position:'relative',
    width:'100%',
    height:'50vh'
  };