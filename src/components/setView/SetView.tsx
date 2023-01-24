import { useMap } from 'react-leaflet'
import { ISetView } from './SetView.props'

function SetView(props: ISetView) {

  const {bounds} = props
  const map = useMap()
  map.fitBounds(bounds, {padding: [50, 50]})
    
  return (
    <></>
  )
}

export default SetView
