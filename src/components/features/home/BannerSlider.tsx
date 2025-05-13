// 슬라이드 배너 컴포넌트
'use client';
import { useState } from 'react';

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

  const movie = movies[current];

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl mb-8">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center pl-16">
        <span className="mb-2 inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">개별구매</span>
        <h2 className="text-5xl font-bold text-white tracking-widest mb-4">{movie.title}</h2>
        <p className="text-lg text-gray-200 max-w-xl">{movie.overview}</p>
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center">&#60;</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center">&#62;</button>
      <div className="absolute right-6 bottom-4 text-white text-sm bg-black/40 rounded px-2 py-1">{current + 1} / {total}</div>
    </div>
  );
} 