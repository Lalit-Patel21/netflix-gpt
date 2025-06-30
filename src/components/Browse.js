import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SeconaryContainer from "./SeconaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SeconaryContainer />
    </div>
  );
};

export default Browse;
