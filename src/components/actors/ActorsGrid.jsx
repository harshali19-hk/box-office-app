import ActorsCard from './ActorsCard';
import {FlexGrid} from '../Commom/FlexGrid'


const ActorsGrid = ({ actors }) => {
    // console.log("act :", actors)
  return (
    <FlexGrid>  
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : '/img-not-found.png'
          }
          id={data.person.id}
          summary={data.person.summary}
          country={data.person.country ? data.person.country.name : null}
          gender={data.person.gender}
          birthday={data.person.birthday}
          deathday={data.person.deathday}

        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
