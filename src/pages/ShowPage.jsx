import { useParams } from 'react-router-dom';
import { GetShowId } from '../API/TvmazeApi';
import { useQuery } from 'react-query';

const Show = () => {
  const params = useParams();
  const { showId } = params;

  const result = useQuery(['show', showId], () => GetShowId(showId));
  const { data: showData, error: showError } = result;

  if (showError) {
    return <div>we have an error : {showError.message}</div>;
  }

  if (showData) {
    return <div>got show data : {showData.name}</div>;
  }

  return (
    <>
      <h2>data is loading....</h2>
    </>
  );
};

export default Show;
