import ShowsCard from './ShowsCard';

const ShowsGrid = ({ shows }) => {
    
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
        />
      ))}
    </>
  );
};

export default ShowsGrid;
