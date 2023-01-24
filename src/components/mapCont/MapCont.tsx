import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { fetchingList, fetchingListError, fetchingListSuccess } from '../../redux/reducers/orderListSlice'
import Map from '../map/Map'

export default function MapCont() {

  const dispatch = useAppDispatch()

  const initialBounds: LatLngBoundsExpression = []
  const [bounds, setBounds] = useState(initialBounds)

  const initialCenter: LatLngExpression = [55.757233, 37.618943]
  const [center, setCenter] = useState(initialCenter)

  const clickHandler = () => {
    dispatch(fetchingList())
    setBounds([ [59.84660399, 30.29496392], [59.82934196, 30.42423701] ])  
  }
      
  return (
    <div>
        {/* <button type='button' onClick={clickHandler}>Button</button> */}
       { bounds.length === 0 ? <Map center = {center} zoom = {13}/> : <Map bounds={bounds} />}
    </div>
  )
}
