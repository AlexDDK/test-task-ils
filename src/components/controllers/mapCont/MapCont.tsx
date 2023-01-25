import { LatLngBoundsExpression, LatLngExpression, LatLngTuple } from 'leaflet'
import { useAppSelector } from '../../../redux/hooks/hooks'
import { currentOrderSelector, currentPolylineSelector } from '../../../redux/selectors/selectors'
import Map from '../../UI/map/Map'
import { search } from './mapHelper'

export default function MapCont() {

  const order = useAppSelector(currentOrderSelector)
  const polyData = useAppSelector(currentPolylineSelector)

  const initialCenter: LatLngExpression = [59.933005, 30.308888]
  
  let polylineData: LatLngExpression[] = []
  if (polyData.length !== 0) {
    polylineData = polyData
  }

  let polyBounds : LatLngTuple[]= [];
  if (polyData.length !== 0) {
    polyBounds = search(polyData)
  }

  let markers : LatLngBoundsExpression = [];
  if (order.id !== 0) {
    markers = [ [order.from.lat, order.from.lng], [order.to.lat, order.to.lng]]
  }

  let flagMarkers = markers.length !== 0 ? true : false
  let flagPolylineData = polylineData.length !== 0 ? true : false
  let flagPolyBounds = (polyBounds[0] && polyBounds[1]) ? true : false

  return (
    <>
      { flagMarkers && flagPolylineData && flagPolyBounds ? 
        <Map markers={markers} polylineData={polylineData} polyBounds={polyBounds}/> :
        <Map center = {initialCenter} /> 
      }
    </>
  )
}
