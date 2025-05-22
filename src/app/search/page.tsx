import { Metadata } from "next";
import InteractiveContents from "./components/InteractiveContents";

export const metadata: Metadata = {
  title: "OSSCA-team1 - 검색 페이지",
};

const getMoviesData = async () => {
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzhlMTE3MzBiODg2MTZhYzI5MDgwOThjMTMzNmE1NSIsIm5iZiI6MTczOTk0ODQ5OS40OTksInN1YiI6IjY3YjU4MWQzMjE1MjYzOGY1ZWUzYjE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjQ0bMZHOX8s0YztcLQ0ZKfmxi3Lla-9O3y68nIYlwo";
  const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  return data;
};

export default async function SearchPage() {
  const moviesData = await getMoviesData();

  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container-1680 py-40">
        <InteractiveContents moviesData={moviesData} />
      </div>
    </main>
  );
}
