import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import React, { useState } from 'react'
import Map from '../map/Map'

export default function MapCont() {

  const initialBounds: LatLngBoundsExpression = []
  const [bounds, setBounds] = useState(initialBounds)

  const initialCenter: LatLngExpression = [55.757233, 37.618943]
  const [center, setCenter] = useState(initialCenter)

    // let center: Array<number> = [55.757233, 37.618943]
    // let bounds: LatLngBoundsExpression = []

    const clickHandler = () => {
        setBounds([ [59.84660399, 30.29496392], [59.82934196, 30.42423701] ])
    }
      
  return (
    <div>
        <button type='button' onClick={clickHandler}>Button</button>
       { bounds.length === 0 ? <Map center = {center} zoom={13}/> : <Map bounds={bounds} />}
    </div>
  )
}
