import React from 'react';

const FilterBar = ({ selectedCategory, setSelectedCategory, categories }) => {
    return (
        <div className="filter-bar-container">
            <div className="filter-scroll">
                <button
                    className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('')}
                >
                    All Categories
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
