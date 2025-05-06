import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import MovieThumbnail from '../../../public/images/test_movie_thumbnail.jpg'

export const metadata: Metadata = {
   title: 'OSSCA-team1 - 검색 페이지'
}

export default function SearchPage() {

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
      <div className="container-1680 py-40">
         {/* 검색바 */}
         <div className="w-800 rounded-[16px] py-16 px-24 bg-[#222326]">
            <input
               type="text"
               placeholder="검색어를 입력해주세요."
               className="w-full"
            />
         </div>

         {/* 인기 검색어 카테고리 */}
         <section className="mt-60">
            <h3 className="text-xl font-bold">인기 검색어 TOP 10</h3>
            <ul className="flex flex-wrap items-center gap-16 mt-24">
               {popularSearchCategory.map((category, index) =>
                  <li key={index}>
                     <button
                        className="leading-1em border-[1px] border-[#4a4a4a] border-solid rounded-full py-10 px-16"
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
                     <p className="text-xl">{content.name}</p>
                  </li>
               )}
            </ul>
         </section>

         {/* 인기 */}
         <section className="mt-60">
            <h3 className="text-xl font-bold">인기</h3>
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
   )
}