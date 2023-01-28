import styles from './map.module.css'
import { MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip } from 'react-leaflet'
import SetView from '../setView/SetView'
import { IMapProps } from './map.props'



function Map(props: IMapProps) {

  const {center, markers, polylineData, polyBounds} = props
  const purpleOptions = { color: 'purple' }

  

  return (
   <div data-testid="map">
    {markers && polylineData && polyBounds ? 
      (<MapContainer className={styles.mapContainer} scrollWheelZoom={false} data-testid="mapContainer1">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={markers[0]}>
        <Tooltip direction="top" offset={[-15, -13]} opacity={0.9} permanent>
          Start
        </Tooltip>
          <Popup>
          Точка погрузки. Координаты: {markers[0][0]}, {markers[0][1]}
          </Popup>
        </Marker>

        <Marker position={markers[1]}>
          <Tooltip direction="top" offset={[-15, -13]} opacity={0.9} permanent>
            Finish
          </Tooltip>
          <Popup>
          Точка разгрузки. Координаты: {markers[1][0]}, {markers[1][1]}
          </Popup>
        </Marker>

        <Polyline pathOptions={purpleOptions} positions={polylineData} />

        <SetView bounds={polyBounds}/>

      </MapContainer>
      
      ) : 
      (<MapContainer data-testid="mapContainer2" className={styles.mapContainer} center={center} zoom={13} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       </MapContainer>
      )
    }
   </div>
  )
}

export default Map
