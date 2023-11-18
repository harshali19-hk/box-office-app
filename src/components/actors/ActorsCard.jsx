
const ActorsCard = ({ name, image, summary,gender,country,birthday,deathday }) => {

  return (
    <>
      <div>
        <img src={image} alt={name} />
      </div>
      <h2>{name} {!!gender && `(${gender})`}</h2>
      <p>{country? `Comes from ${country}` : `No Country Known`}</p>
      {!!birthday && <p>Born on {birthday}</p> }
      <p>{deathday ? `Died On ${deathday}` : `Alive`}</p>
    </>
  );
};

export default ActorsCard;
