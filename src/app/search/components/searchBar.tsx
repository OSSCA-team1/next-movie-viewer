"use client";

import { ChangeEvent, useState, useEffect, useRef } from "react";

interface SearchBarProps {
  data: any;
  onSearchResults: (results: any[], searchText?: string) => void;
}

export default function SearchBar({ data, onSearchResults }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 디바운싱 로직이 적용된 검색 함수
  const performSearch = (searchText: string) => {
    if (!searchText.trim()) {
      setSearchResult([]);
      onSearchResults([], "");
      return;
    }

    const filteredResults = data.filter((item: any) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResult(filteredResults);
    onSearchResults(filteredResults, searchText);
  };

  useEffect(() => {
    // 디바운스 - 300ms 동안 타이핑이 없으면 검색 실행
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      performSearch(search);
    }, 300);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [search, data]);

  const changeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  return (
    <div className="relative">
      {/* 검색바 */}
      <div className="w-800 rounded-[16px] py-16 px-24 bg-[#38393d]">
        <input
          value={search}
          onChange={changeSearchText}
          type="text"
          placeholder="A Minecraft Movie"
          className="w-full text-white"
        />
      </div>
      {searchResult.length > 0 && (
        <ul className="overflow-y-auto absolute top-70 left-0 flex flex-col gap-16 w-800 max-h-400 rounded-[16px] p-20 bg-white">
          {searchResult.map((item: any, index: number) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
