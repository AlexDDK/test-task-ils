import { LatLngBoundsLiteral,} from "leaflet"

export const search = (arr: any): LatLngBoundsLiteral => {
    const obj = Object.fromEntries(arr)
    const first = Array.from(Object.keys(obj)).map(el => +el)
    const second = Array.from(Object.values(obj))
    first.sort((a,b) => b - a )
    second.sort((a,b) => b - a )

    return [[first[0], second[second.length -1 ]], [first[first.length -1] ,second[0]]]   
}
