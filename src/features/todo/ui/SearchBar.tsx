import { FC, FormEvent, useState } from "react";

interface Props {
    onSearch: (query: string) => void;
}

export const SearchBar: FC<Props> = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSearch(search.trim());
    }
    
    return (
        <form className="flex gap-3 items-center my-5" onSubmit={handleSearch}>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                placeholder="Search for anything..." 
                type="search" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Search
            </button>
        </form>
    )
}