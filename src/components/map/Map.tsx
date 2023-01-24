import styles from './map.module.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import SetView from '../setView/SetView'
import { IMapProps } from './map.props'


function Map(props: IMapProps) {

  let {center, zoom, bounds} = props

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

        <SetView bounds={bounds}/>
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
