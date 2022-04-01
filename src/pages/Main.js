import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_apiKey;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getMovies = (url) => {
    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  console.log(movies);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      alert("Please Sign In..");
      navigate("/login");
    } else {
      alert("Please enter your movie name");
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleFormSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
