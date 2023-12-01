import ShowsCard from './ShowsCard';
import { useStarredShows } from '../../lib/useStarredShows';



const ShowsGrid = ({ shows }) => {

 const [starredShows,dispatchStarred] = useStarredShows()


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
          isStarred = {starredShows.includes(data.show.id)}
        />
      ))}
    </>
  );
};

export default ShowsGrid;
