import { useState } from "react"



const Home = () => {
  
 const [searchStr,setSearchStr] = useState("")

 const handleInputChange = (eve)=>{
  setSearchStr(eve.target.value)
 }

 const handleOnSearch = async (eve)=>{
  eve.preventDefault()
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
  const body = await response.json()
   console.log(body)
 }

  return (
    <div>
      <form onSubmit={handleOnSearch}>
      <input type="text" value={searchStr} onChange={handleInputChange} /> 
      <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Home
