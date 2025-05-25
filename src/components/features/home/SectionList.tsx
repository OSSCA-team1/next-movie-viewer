// 추천 콘텐츠 섹션 컴포넌트
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface SectionListProps {
  title: string;
  movies: Movie[];
}

export default function SectionList({ title, movies }: SectionListProps) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[180px]">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg mb-2 w-full h-[260px] object-cover"
            />
            <div className="text-sm text-center text-white truncate">
              {movie.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
