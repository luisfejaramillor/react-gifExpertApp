import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category, key) => {
  
   const [state, setState] = useState({
          data: [],
          loading: true
   })

    useEffect( ()=>{
        getGifs(category, key).then( gif =>{
            setTimeout(() => {
                setState({
                    data: gif,
                    loading: false
                })
            }, 1000);
        })
    },[category])

   return state

}
