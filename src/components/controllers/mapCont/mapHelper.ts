import { LatLngBoundsLiteral} from "leaflet"

export const findExtremes = (arr: any): LatLngBoundsLiteral => {

    if ( !arr.length || !Array.isArray(arr) ) return []

    let minFirst = Infinity
    let minSecond = Infinity 
    let maxFirst = -Infinity
    let maxSecond = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > maxFirst) {
            maxFirst = arr[i][0];
        }
        if (arr[i][0] < minFirst) {
            minFirst = arr[i][0];
        }
        if (arr[i][1] > maxSecond) {
            maxSecond = arr[i][1];
        }
        if (arr[i][1] < minSecond) {
            minSecond = arr[i][1];
        }
    }
    return [[maxFirst, maxSecond], [minFirst, minSecond]];  
}

