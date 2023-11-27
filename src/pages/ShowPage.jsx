import { useParams,Link } from 'react-router-dom';
import { GetShowId } from '../API/TvmazeApi';
import { useQuery } from 'react-query';
import ShowMainData from '../components/shows/showMainData';
import Details from '../components/shows/details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';

const Show = () => {
  const params = useParams();
  const { showId } = params;

  const { data: showData, error: showError } = useQuery({
    querykey : ['show', showId], queryFn: () => GetShowId(showId),
    refetchOnWindowFocus:false
  });
  // const { data: showData, error: showError } = result;

  if (showError) {
    return <div>we have an error : {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <Link to='/'>Go back to Home</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}

        />
        <div>
          <h2>Details</h2>
          <div>
            <Details status={showData.status} premiered={showData.premiered} network={showData.network} />
          </div>
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
        
      </div>
    );
  }

  return (
    <>
      <h2>data is loading....</h2>
    </>
  );
};

export default Show;
