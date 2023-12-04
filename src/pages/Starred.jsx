import {  GetShowsByIds } from "../API/TvmazeApi";
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from "react-query";
import  ShowsGrid from '../components/shows/ShowsGrid'
import {TextCenter} from '../components/Commom/TextCenter'


const Starred = () => {
  const [starredShowsIds] = useStarredShows()

  const {data:starredShows , error:starredShowsError} = useQuery( {queryKey : ['starred', starredShowsIds], 
 
  queryFn :  () => GetShowsByIds(starredShowsIds).then( result => result.map( show => ({show})))
  ,refetchOnWindowFocus:false
 });
 
 if(starredShows?.length === 0){
  // console.log(starredShows)
  return <TextCenter>No shows are Starred!</TextCenter>
 }
 if(starredShows?.length > 0){
  return <ShowsGrid shows={starredShows} />
 }
 if(starredShowsError){
  return <TextCenter>Error Occurred : {starredShowsError.message}</TextCenter>
 }

 

  return (
    <div>
      <TextCenter>Shows are Loading...</TextCenter>
    </div>
  );
};

export default Starred;
