import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpData<T>(url:string){

    const [data,setData] = useState<T[]>([]);
    const [loading,setLoading] = useState(false);
  
  
    useEffect(()=>{
      //la variable ignore, nos sirve como bandera para que se pueda renderizar el SKELETON
      let ignore = false;
  
      //esto hace que se ejecute solo una vez, independientemente del stricMode  
      const controller = new AbortController();
      const {signal} = controller
      setLoading(true);
  
      //destructure de response para solo obtener la propiedad de DATA
      axios.get<{meals:T[]}>(url,{signal})
          .then(({data})=>{
            
            if(!ignore){
              setLoading(false)
            }
  
            setData(data.meals)})
  
          .finally(()=>{
            if(!ignore){
              setLoading(false)}
            }          
          );
  
        return () => {
          ignore=true;
          controller.abort();
        }
      },[]);
      return { loading, data, setData,setLoading};
}