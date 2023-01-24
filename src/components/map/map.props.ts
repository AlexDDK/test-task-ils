import { LatLngBoundsLiteral, LatLngExpression } from "leaflet";

export interface IMapProps {
    center?: LatLngExpression, 
    zoom?: number, 
    bounds?: LatLngBoundsLiteral
}