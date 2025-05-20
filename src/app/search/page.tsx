import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import MovieThumbnail from '../../../public/images/test_movie_thumbnail.jpg'
import SearchBar from "./components/searchBar"

export const metadata: Metadata = {
   title: 'OSSCA-team1 - 검색 페이지'
}

const getMoviesData = async () => {
   const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzhlMTE3MzBiODg2MTZhYzI5MDgwOThjMTMzNmE1NSIsIm5iZiI6MTczOTk0ODQ5OS40OTksInN1YiI6IjY3YjU4MWQzMjE1MjYzOGY1ZWUzYjE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjQ0bMZHOX8s0YztcLQ0ZKfmxi3Lla-9O3y68nIYlwo'
   const response = await fetch('https://api.themoviedb.org/3/discover/movie', {
      headers: {
         Authorization: `Bearer ${apiKey}`
      }
   });
   const data = await response.json();

   return data;
}

export default async function SearchPage() {

   const moviesData = await getMoviesData();

   const popularSearchCategory = [
      { name: '전체' },
      { name: '코미디' },
      { name: '로맨스' },
      { name: '액션' },
   ]

   const popularSearchContent = [
      { name: '진격의 거인 1기' },
      { name: '콘클라베' },
      { name: '최종병기 앨리스' },
      { name: '퇴마록' },
      { name: '강철의 연금술사 BROTHERHOOD' },
      { name: '서브스턴스' },
      { name: '더 루키 시즌 2' },
      { name: '연애혁명' },
      { name: '짱구는 못말려 4' },
      { name: '휴먼 센티피드' },
   ]

   return (
      <main className="bg-[#121212]">
         <div className="container-1680 py-40">

            <SearchBar data={moviesData.results} />

            {/* 인기 검색어 카테고리 */}
            <section className="mt-60">
               <h3 className="text-xl font-bold text-white">인기 검색어 TOP 10</h3>
               <ul className="flex flex-wrap items-center gap-16 mt-24">
                  {popularSearchCategory.map((category, index) =>
                     <li key={index}>
                        <button
                           className="leading-1em border-[1px] border-[#4a4a4a] border-solid rounded-full py-10 px-16 text-white"
                        >
                           {category.name}
                        </button>
                     </li>
                  )}
               </ul>

               {/* 인기 검색어 컨텐츠 목록 */}
               <ul className="grid grid-cols-2 gap-x-12 gap-y-20 w-800 mt-40">
                  {popularSearchContent.map((content, index) =>
                     <li className="flex items-center gap-16" key={index}>
                        <span className="text-xl font-medium text-[var(--primary-color)]">{index + 1}</span>
                        <p className="text-xl text-white">{content.name}</p>
                     </li>
                  )}
               </ul>
            </section>

            {/* 인기 */}
            <section className="mt-60">
               <h3 className="text-xl font-bold text-white">인기</h3>
               <ul className="grid grid-cols-7 mt-12">
                  <li>
                     <Link href="/">
                        <Image
                           src={MovieThumbnail}
                           alt=""
                           width={400}
                           height={400}
                        />
                     </Link>
                  </li>
               </ul>
            </section>
         </div>
      </main>
   )
}