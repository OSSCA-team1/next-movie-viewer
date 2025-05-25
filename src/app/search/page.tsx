import { Metadata } from "next";
import SearchResults from "./components/SearchResults";

export const metadata: Metadata = {
  title: "OSSCA-team1 - 검색 페이지",
};

const apiKey = process.env.NEXT_PUBLIC_TMDB_DISCOVER_API_KEY;

const getMoviesData = async () => {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return await response.json();
};

const getPopularMovies = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return await response.json();
};

export default async function SearchPage() {
  const moviesData = await getMoviesData(); // 영화 목록 데이터 가져오기
  const popularMovies = await getPopularMovies(); // 인기 영화 목록 데이터 가져오기

  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container-1680 py-40">
        <SearchResults moviesData={moviesData} popularMovies={popularMovies} />
      </div>
    </main>
  );
}
