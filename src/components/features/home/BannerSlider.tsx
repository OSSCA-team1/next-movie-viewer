// 슬라이드 배너 컴포넌트
'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

interface BannerSliderProps {
  movies: Movie[];
}

export default function BannerSlider({ movies }: BannerSliderProps) {
  const [current, setCurrent] = useState(0);
  const total = movies.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  if (!movies.length) return null;

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl mb-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full h-full">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center pl-16">
                <span className="flex w-[50px] h-[25px] items-center justify-center mb-2 inline-block bg-gray-800 text-white text-xs px-2 py-5 rounded">
                  개별구매
                </span>
                <h2 className="text-5xl font-bold text-white tracking-widest mb-4">
                  {movie.title}
                </h2>
                <p className="text-lg text-gray-200 max-w-xl text-wrap text-md">{movie.overview}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* 커스텀 네비게이션 버튼 */}
        <div className="swiper-button-prev !w-[50px] !h-[50px] !bg-black/40 hover:!bg-black/60 !rounded-full !text-white !text-2xl !font-bold after:!content-none flex items-center justify-center transition-colors">
          &#60;
        </div>
        <div className="swiper-button-next !w-[50px] !h-[50px] !bg-black/40 hover:!bg-black/60 !rounded-full !text-white !text-2xl !font-bold after:!content-none flex items-center justify-center transition-colors">
          &#62;
        </div>
      </Swiper>
    </div>
  );
} 