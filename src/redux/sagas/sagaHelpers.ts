import { listFromDataBase } from "../../server/listFromDB"

export const fetchToDataBase = () => {
    
    return new Promise(res => setTimeout(res, 2000)).then( () => { // simulate an asynchronous request to DataBase
        return JSON.stringify(listFromDataBase)
    })
    
}