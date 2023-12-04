import {SearchCard,SearchImgWrapper} from '../Commom/SearchCard'

const ActorsCard = ({ name, image, summary,gender,country,birthday,deathday }) => {

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h2>{name} {!!gender && `(${gender})`}</h2>
      <p>{country? `Comes from ${country}` : `No Country Known`}</p>
      {!!birthday && <p>Born on {birthday}</p> }
      <p>{deathday ? `Died On ${deathday}` : `Alive`}</p>
    </SearchCard>
  );
};

export default ActorsCard;
