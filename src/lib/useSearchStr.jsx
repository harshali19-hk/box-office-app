import { useState,useEffect } from "react"

const usePersistedState = (initialState,sessionStoragekey)=>{
    const [state,setState] = useState(()=>{
        const persistedValue = sessionStorage.getItem(sessionStoragekey);
        return persistedValue ? JSON.parse(persistedValue) : initialState
    })
    useEffect(()=>{
        sessionStorage.setItem(sessionStoragekey,JSON.stringify(state))
      },[state,sessionStoragekey]);

    return [state,setState]

}

export const useSearchStr = ()=>{
 return usePersistedState("" , "searchString")
}