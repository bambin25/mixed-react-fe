import { useState, useEffect } from "react";
import Movie from "./components/Movie";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // localhost:8080 은 나중에 ALB 생성 후 DNS 로 변경 예정 sample-sg-elb
    // const response = await fetch("http://localhost:8080");
    // const response = await fetch("http://boot.bambin2025.kro.kr");
    // const response = await fetch("https://bambin2025.kro.kr:8080");
    const response = await fetch("https://boot.bambin2025.kro.kr/movies/");
    // 여기다가 새로 발급한 인증서 붙은 링크 붙이면 됨
    const json = await response.json();
    setMovies(json.movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h1>Movie App !</h1>
      {isLoading ? (
        "로딩중..."
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} coverImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} />
          ))}
        </div>
      )}
    </>
  );
}
export default App;
