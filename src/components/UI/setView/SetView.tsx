import { useMap } from 'react-leaflet'
import { ISetView } from './SetView.props'

function SetView(props: ISetView) {

  const {bounds} = props
  const map = useMap()
  map.fitBounds(bounds)

  return null
}

export default SetView
