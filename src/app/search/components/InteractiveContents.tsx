"use client";

import Image from "next/image";
import SearchBar from "./searchBar";
import { useState } from "react";

export default function InteractiveContents({
  moviesData,
}: {
  moviesData: any;
}) {
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

  const popularSearchContent = [
    { name: "진격의 거인 1기" },
    { name: "콘클라베" },
    { name: "최종병기 앨리스" },
    { name: "퇴마록" },
    { name: "강철의 연금술사 BROTHERHOOD" },
    { name: "서브스턴스" },
    { name: "더 루키 시즌 2" },
    { name: "연애혁명" },
    { name: "짱구는 못말려 4" },
    { name: "휴먼 센티피드" },
  ];

  const handleSearchResults = (results: any[], searchText?: string) => {
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
        <ul className="grid grid-cols-2 gap-x-12 gap-y-20 w-800 mt-40">
          {popularSearchContent.map((content, index) => (
            <li className="flex items-center gap-16" key={index}>
              <span className="text-xl font-medium text-[var(--primary-color)]">
                {index + 1}
              </span>
              <p className="text-xl text-white">{content.name}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 검색결과 */}
      <section className="mt-80">
        <h3 className="text-2xl font-bold text-white">검색결과</h3>
        <ul className="grid grid-cols-7 gap-x-20 gap-y-40 mt-24">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie: any, index: number) => (
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
