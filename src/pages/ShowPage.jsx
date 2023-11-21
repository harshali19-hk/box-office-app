import { useParams } from "react-router-dom"

const Show = ()=>{
    const params = useParams()
    const {showId} = params
  return(
    <>
       <h2>Show PAge {showId}</h2>
       <h1>{null}</h1>
    </>
  )
}

export default Show