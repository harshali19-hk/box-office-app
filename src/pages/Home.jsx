import { useState } from "react"
// import APIget from "../API/TvmazeApi"
import { SearchForShows } from "../API/TvmazeApi"


const Home = () => {
  
 const [searchStr,setSearchStr] = useState("")
 const [apiData , setApiData] = useState([])
 const [apiDataError,setApiDataError] = useState(null)

 const handleInputChange = (eve)=>{
  setSearchStr(eve.target.value)
 }

 const handleOnSearch = async (eve)=>{
  eve.preventDefault()

  try {
    setApiDataError(null)
    const result = await SearchForShows(searchStr)
    // console.log(result)
  setApiData(result)
  } catch (error) {
    setApiDataError(error)
  }
  
 }

 const renderApiData = ()=>{
  if(apiDataError){
    console.log(apiDataError)
   return <div>Error Ocuured : {apiDataError.message}</div>
  }
   if(apiData){
      return apiData.map((item)=>(
      <div key={item.show.id}> {item.show.name} </div>
   )) }
   return null
 }

  return (
    <div>
      <form onSubmit={handleOnSearch}>
      <input type="text" value={searchStr} onChange={handleInputChange} /> 
      <button type="submit">Search</button>
      </form>
     <div>{renderApiData()}</div>
    </div>
  )
}

export default Home
