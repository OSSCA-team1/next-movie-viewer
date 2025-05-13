// 영화 메인 페이지
import BannerSlider from '@/components/features/home/BannerSlider';
import SectionList from '@/components/features/home/SectionList';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`, { cache: 'no-store' });
  return res.json();
}

export default async function MoviesPage() {
  const [bannerData, recommendData, trendingData] = await Promise.all([
    fetchMovies('/movie/now_playing?language=ko-KR&page=1'),
    fetchMovies('/movie/top_rated?language=ko-KR&page=1'),
    fetchMovies('/trending/movie/day?language=ko-KR'),
  ]);

  return (
    <main className="bg-neutral-900 min-h-screen px-8 py-8">
      <BannerSlider movies={bannerData.results.slice(0, 5)} />
      <SectionList title="믿고 보는 추천작" movies={recommendData.results.slice(0, 10)} />
      <SectionList title="실시간 인기 콘텐츠" movies={trendingData.results.slice(0, 10)} />
    </main>
  );
}

