import axios from 'axios';

const useData = () => {
  const fetchData = async (pageNo, perPage) => {
    try {
      const res = await axios.get(
        'https://asia-northeast3-team-projects-343711.cloudfunctions.net/balaan-crawler-dev-contents',
        { params: { pageNo, perPage } },
      );
      return res?.data;
    } catch (e) {
      return false;
    }
  };
  return fetchData;
};

export default useData;
