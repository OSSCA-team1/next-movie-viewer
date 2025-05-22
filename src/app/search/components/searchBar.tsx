"use client";

import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  data: any;
  onSearchResults: (results: any[], searchText?: string) => void;
}

export default function SearchBar({ data, onSearchResults }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const changeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearch(searchText);

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

  return (
    <div className="relative">
      {/* 검색바 */}
      <div className="w-800 rounded-[16px] py-16 px-24 bg-[#38393d]">
        <input
          value={search}
          onChange={changeSearchText}
          type="text"
          placeholder="A Working Man"
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
