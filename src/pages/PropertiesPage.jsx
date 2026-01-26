import React, { useState } from 'react';
import PropertyCard from '../components/properties/PropertyCard';
import './PropertiesPage.css';

// Import images (reusing slider images for demo)
import rentImg from '../resources/home-slider/rent.png';
import buyImg from '../resources/home-slider/buy.png';
import sellImg from '../resources/home-slider/sell.png';

const PROPERTIES_DATA = [
    {
        id: 1,
        title: 'Luxury Apartment',
        location: 'Downtown, City',
        price: '$2,500/mo',
        type: '3BHK',
        image: rentImg,
    },
    {
        id: 2,
        title: 'Modern Villa',
        location: 'Suburbs, City',
        price: '$850,000',
        type: 'Villa',
        image: buyImg,
    },
    {
        id: 3,
        title: 'Cozy Studio',
        location: 'Uptown, City',
        price: '$1,200/mo',
        type: 'Properties',
        image: sellImg, // Placeholder
    },
    {
        id: 4,
        title: 'Family Home',
        location: 'Green Valley, City',
        price: '$450,000',
        type: '2BHK',
        image: rentImg, // Placeholder
    },
    {
        id: 5,
        title: 'Penthouse Suite',
        location: 'City Center',
        price: '$5,000/mo',
        type: '3BHK',
        image: buyImg, // Placeholder
    },
    {
        id: 6,
        title: 'Beachfront Condo',
        location: 'Seaside, City',
        price: '$600,000',
        type: 'Villa',
        image: sellImg, // Placeholder
    },
];

const PropertiesPage = () => {
    const [filterType, setFilterType] = useState('All');
    const [filterLocation, setFilterLocation] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState(PROPERTIES_DATA);

    const applyFilters = (type, location, query) => {
        let filtered = PROPERTIES_DATA;

        // Type Filter
        if (type !== 'All') {
            filtered = filtered.filter(item => item.type === type);
        }

        // Location Filter
        if (location !== 'All') {
            if (location === 'City') {
                filtered = filtered.filter(item => item.location.includes('City'));
            } else {
                filtered = filtered.filter(item => item.location.includes(location));
            }
        }

        // Search Query Filter
        if (query) {
            const lowerQuery = query.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.location.toLowerCase().includes(lowerQuery)
            );
        }

        setItems(filtered);
    };

    const onTypeChange = (e) => {
        const type = e.target.value;
        setFilterType(type);
        applyFilters(type, filterLocation, searchQuery);
    }

    const onLocationChange = (e) => {
        const location = e.target.value;
        setFilterLocation(location);
        applyFilters(filterType, location, searchQuery);
    }

    const onSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        applyFilters(filterType, filterLocation, query);
    }

    return (
        <div className="properties-page">
            <div className="properties-header">
                <h1>Available Properties</h1>
                <p>Browse our curated list of top-tier properties.</p>
            </div>

            <div className="properties-controls">
                <div className="control-group search-group">
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchQuery}
                        onChange={onSearchChange}
                        className="search-input"
                    />
                </div>
                <div className="control-group">
                    <label>Type:</label>
                    <select value={filterType} onChange={onTypeChange}>
                        <option value="All">All Types</option>
                        <option value="3BHK">3BHK</option>
                        <option value="2BHK">2BHK</option>
                        <option value="Villa">Villa</option>
                        <option value="Properties">Properties</option>
                    </select>
                </div>
                <div className="control-group">
                    <label>Location:</label>
                    <select value={filterLocation} onChange={onLocationChange}>
                        <option value="All">All Locations</option>
                        <option value="Downtown">Downtown</option>
                        <option value="Suburbs">Suburbs</option>
                        <option value="City">City Center</option>
                    </select>
                </div>
            </div>

            <div className="properties-grid">
                {items.length > 0 ? (
                    items.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                    <div className="no-results">
                        <p>No properties found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertiesPage;
