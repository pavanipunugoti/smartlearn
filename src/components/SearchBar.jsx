import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
    return (
        <div className="search-bar-container">
            <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search courses by title, tags or category..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;
