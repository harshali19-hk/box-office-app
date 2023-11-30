import ShowsCard from './ShowsCard';
import { useReducer } from 'react';

const starredShowsReducer = (currentStarred , action)=>{
   switch(action.type){
    case 'STAR' : return currentStarred.concat(action.showId)
    case 'UNSTAR' : return currentStarred.filter((showId)=> showId !== action.showId)
    default : return currentStarred
   }
}

const ShowsGrid = ({ shows }) => {

  const [starredShows , dispatchStarred] = useReducer(starredShowsReducer,[])
  console.log({starredShows})

  const onStarMeClick = (showId)=>{
    const isStarred = starredShows.includes(showId)

    if(isStarred){
      dispatchStarred({type : 'UNSTAR' , showId})
    }
    else{
      dispatchStarred({type : 'STAR' , showId})

    }
  }
    
  return (
    <>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/img-not-found.png'
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarMeClick = {onStarMeClick}
        />
      ))}
    </>
  );
};

export default ShowsGrid;
