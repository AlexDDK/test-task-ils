import React, { useEffect } from 'react'
import styles from './map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function Map(props:any) {

  let {center, zoom, bounds, maxZoom} = props

  function SetView() {
    // const [bbounds, setBounds] = useState(bounds)
    const map = useMap()

    useEffect(()=>{
      if (bounds) {
        // setBounds(bbounds)
        map.fitBounds(bounds, {maxZoom: 12})
      }
    })
  
    return (
      <></>   
    )
  }

  

  
  return (
   <>
    {bounds ? 
      (<MapContainer className={styles.mapContainer} bounds={bounds} maxZoom={maxZoom} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.84660399, 30.29496392]}>
          <Popup>
          Чтобы увидеть маршрут, выберите его в таблице
          </Popup>
        </Marker>
        <Marker position={[59.82934196, 30.42423701]}>
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
