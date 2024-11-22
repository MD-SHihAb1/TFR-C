import { FaSearch } from "react-icons/fa";

const SearchBar = ({handleSearch}) => {
    return (
        <div>
            <form className="flex items-center gap-[2px]" onSubmit={handleSearch}>
                <input type="text" name="search" placeholder="Search Product"
                 className="max-w-md p-[11px] border border-black rounded-l-md "
                />
                <button type="submit" className="btn rounded-l-none rounded-r-md btn-outline bg-gray-300">
                    <FaSearch size={20} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;