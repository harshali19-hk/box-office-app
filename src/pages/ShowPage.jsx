import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetShowId } from '../API/TvmazeApi';

const Show = () => {
  const params = useParams();
  const { showId } = params;

  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetShowId(showId);
        setShowData(data);
      } catch (error) {
        setShowError(null);
      }
    }
    fetchData();
  }, [showId]);

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
