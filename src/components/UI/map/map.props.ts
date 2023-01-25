import { LatLngBoundsLiteral, LatLngExpression } from "leaflet";

export interface IMapProps {
    center?: LatLngExpression, 
    markers?: LatLngBoundsLiteral,
    polylineData?: LatLngExpression[]
    polyBounds?: LatLngBoundsLiteral
}