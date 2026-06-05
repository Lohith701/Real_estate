import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState('Apartment');
    const [searchQuery, setSearchQuery] = useState('');
    const [lastSearch, setLastSearch] = useState(null);
    const navigate = useNavigate();

    const tabs = ['Apartment', 'Villa', 'Commercial'];

    React.useEffect(() => {
        const storedSearch = localStorage.getItem('lastPropertySearch');
        if (storedSearch) {
            setLastSearch(JSON.parse(storedSearch));
        }
    }, []);

    const handleSearch = () => {
        const searchData = {
            type: activeTab,
            query: searchQuery,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('lastPropertySearch', JSON.stringify(searchData));
        setLastSearch(searchData);

        const queryParams = new URLSearchParams({
            type: activeTab,
            query: searchQuery
        }).toString();
        navigate(`/properties?${queryParams}`);
    };

    const handleRecentSearch = () => {
        if (lastSearch) {
            const queryParams = new URLSearchParams({
                type: lastSearch.type,
                query: lastSearch.query
            }).toString();
            navigate(`/properties?${queryParams}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar-wrapper">
            <div className="search-tabs-container">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`search-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="search-container shadow-lg">
                <div className="search-box d-flex align-items-center bg-white rounded-3">
                    <div className="location-select px-3 py-2 d-flex align-items-center border-end" style={{ minWidth: '140px', cursor: 'pointer' }}>
                        <span className="fw-bold">Bangalore</span>
                        <i className="bi bi-chevron-down ms-auto text-secondary small"></i>
                    </div>

                    <div className="flex-grow-1 px-3">
                        <input
                            type="text"
                            className="form-control border-0 shadow-none px-0"
                            placeholder="Search upto 3 localities or landmarks"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>

                    <button
                        className="btn btn-primary search-btn rounded-0 rounded-end px-4 py-3 fw-bold d-flex align-items-center"
                        onClick={handleSearch}
                    >
                        <i className="bi bi-search me-2"></i>
                        Search
                    </button>
                </div>

                {/* Recent Searches */}
                {lastSearch && (
                    <div
                        className="recent-search mt-2 bg-white rounded-2 shadow-sm p-2 d-flex align-items-center cursor-pointer"
                        onClick={handleRecentSearch}
                    >
                        <div className="recent-icon-box me-3 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                            <i className="bi bi-clock-history text-primary"></i>
                        </div>
                        <div className="d-flex flex-column lh-1">
                            <span className="text-secondary small mb-1" style={{ fontSize: '0.7rem' }}>Continue Last Search</span>
                            <span className="fw-bold small text-dark">
                                {lastSearch.query ? `${lastSearch.type} in ${lastSearch.query}` : `Search for ${lastSearch.type}`}
                            </span>
                        </div>
                        <i className="bi bi-chevron-right ms-auto text-primary small"></i>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
