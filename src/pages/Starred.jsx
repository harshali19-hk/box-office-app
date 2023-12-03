import {  GetShowsByIds } from "../API/TvmazeApi";
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from "react-query";
import  ShowsGrid from '../components/shows/ShowsGrid'

const Starred = () => {
  const [starredShowsIds] = useStarredShows()

  const {data:starredShows , error:starredShowsError} = useQuery( {queryKey : ['starred', starredShowsIds], 
 
  queryFn :  () => GetShowsByIds(starredShowsIds).then( result => result.map( show => ({show})))
  ,refetchOnWindowFocus:false
 });
 
 if(starredShows?.length === 0){
  // console.log(starredShows)
  return <h2>No shows are Starred!</h2>
 }
 if(starredShows?.length > 0){
  return <ShowsGrid shows={starredShows} />
 }
 if(starredShowsError){
  return <h2>Error Occurred : {starredShowsError.message}</h2>
 }

 

  return (
    <div>
      <h2>Shows are Loading...</h2>
    </div>
  );
};

export default Starred;
