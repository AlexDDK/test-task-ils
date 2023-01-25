import styles from './map.module.css'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import SetView from '../setView/SetView'
import { IMapProps } from './map.props'



function Map(props: IMapProps) {

  const {center, markers, polylineData, polyBounds} = props
  const purpleOptions = { color: 'purple' }

  

  return (
   <>
    {markers && polylineData && polyBounds ? 
      (<MapContainer className={styles.mapContainer} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={markers[0]}>
          <Popup>
          Чтобы увидеть маршрут, выберите его в таблице
          </Popup>
        </Marker>

        <Marker position={markers[1]}>
          <Popup>
          {String(polylineData)}
          </Popup>
        </Marker>

        <Polyline pathOptions={purpleOptions} positions={polylineData} />

        <SetView bounds={polyBounds}/>

      </MapContainer>
      
      ) : 
      (<MapContainer className={styles.mapContainer} center={center} zoom={13} scrollWheelZoom={false} >
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
