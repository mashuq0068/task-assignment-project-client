

import { useQuery } from "@tanstack/react-query";

import UseAxiosDefault from "./UseAxiosDefault";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const UseOneTasks = (id) => {
      const axiosDefault = UseAxiosDefault()
      const {user , loading} = useContext(AuthContext)

    const { data:task , isPending , isLoading , refetch} = useQuery({
        queryKey:["tasks"],
        queryFn : async()=>{
            const response = await axiosDefault.get(`/task/${id}`)
            return response.data

        },
        enabled:!loading
      
    })
    if( isPending){
        return(
            <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
        
        )
    }
    return {task , isPending , isLoading , refetch}
};

export default UseOneTasks;