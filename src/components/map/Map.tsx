import React, { useEffect } from 'react'
import styles from './map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function Map(props:any) {

  let {center, zoom, bounds} = props

  function SetView() {

    const map = useMap()

    bounds && map.fitBounds(bounds, {padding: [50, 50]})
  
    return (
      <></>   
    )
  }

  

  
  return (
   <>
    {bounds ? 
      (<MapContainer className={styles.mapContainer} bounds={bounds} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={bounds[0]}>
          <Popup>
          Чтобы увидеть маршрут, выберите его в таблице
          </Popup>
        </Marker>

        <Marker position={bounds[1]}>
          <Popup>
          Чтобы увидеть маршрут, выберите его в таблице
        </Popup>
        </Marker>

        <SetView />
      </MapContainer>
      ) : 
      (<MapContainer className={styles.mapContainer} center={center} zoom={zoom} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
      </MapContainer>
      )
    }
   </>
 

  )
}

export default Map
