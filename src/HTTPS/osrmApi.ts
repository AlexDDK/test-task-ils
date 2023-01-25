
export const osrmApi = (coordinates: string) =>  
fetch('https://router.project-osrm.org/route/v1/driving/' + 
coordinates + 
'?geometries=geojson&overview=full&steps=true')
