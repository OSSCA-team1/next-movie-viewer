"use client";

import Image from "next/image";
import SearchBar from "./searchBar";
import { useState } from "react";

interface MovieItem {
  title: string;
  poster_path: string;
}

interface MoviesData {
  results: MovieItem[];
}

interface PopularMovies {
  results: MovieItem[];
}

export default function SearchResults({
  moviesData,
  popularMovies,
}: {
  moviesData: MoviesData;
  popularMovies: PopularMovies;
}) {
  const [filteredMovies, setFilteredMovies] = useState<MovieItem[]>([]);

  const popularSearchContent = popularMovies.results.slice(0, 10);

  const handleSearchResults = (results: MovieItem[], searchText?: string) => {
    if (results.length === 0 && !searchText) {
      // 검색어가 없을 때는 원래 데이터 표시
      setFilteredMovies(moviesData.results);
    } else {
      // 검색 결과가 있을 때
      setFilteredMovies(results);
    }
  };

  return (
    <>
      <SearchBar
        data={moviesData.results}
        onSearchResults={handleSearchResults}
      />

      <section className="mt-60">
        {/* 인기 검색어 컨텐츠 목록 */}
        <ul className="grid grid-cols-2 gap-x-12 gap-y-20 mt-40">
          {popularSearchContent.map((content: MovieItem, index: number) => (
            <li className="flex items-center gap-16" key={index}>
              <span className="text-xl font-medium text-[var(--primary-color)]">
                {index + 1}
              </span>
              <p className="text-xl text-white">{content.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 검색결과 */}
      <section className="mt-80">
        <h3 className="text-2xl font-bold text-white">검색결과</h3>
        <ul className="grid grid-cols-7 gap-x-20 gap-y-40 mt-24">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie: MovieItem, index: number) => (
              <li key={index}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  width={400}
                  height={400}
                />
                <p className="mt-16 font-medium text-white">{movie.title}</p>
              </li>
            ))
          ) : (
            <li className="opacity-50 mt-16 text-white">
              검색 결과가 없습니다.
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
