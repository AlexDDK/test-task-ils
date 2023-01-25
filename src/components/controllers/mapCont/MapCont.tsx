import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../redux/hooks/hooks'
import Map from '../../UI/map/Map'

export default function MapCont() {

  const order = useAppSelector((state) => state.currentOrder.current)
  
  const initialBounds: LatLngBoundsExpression = []
  const [bounds, setBounds] = useState(initialBounds)

  const initialCenter: LatLngExpression = [59.933005, 30.308888]
  const [center, setCenter] = useState(initialCenter)

  useEffect(() => {
    setBounds([ [order.from.lat, order.from.ing], [order.to.lat, order.to.ing]])
  },[order])
 
  return (
    <div>
       {order.id === 0 ? <Map center = {center} zoom = {13}/> : <Map bounds={bounds} />}
    </div>
  )
}
