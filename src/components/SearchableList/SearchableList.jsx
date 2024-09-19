import React, { useState, useRef } from 'react';

const SearchableList = ({ items, children, itemKeyFn }) => {
    const lastChane = useRef()
    const [searchItems, setSearchItems] = useState('');

    const searchResults = items.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchItems.toLowerCase())
    );
    const handleChange = (e) => {
        if (lastChane.current) {
            clearTimeout(lastChane.current)
        }
        lastChane.current = setTimeout(() => {
            lastChane.current = null
            setSearchItems(e.target.value)
        }, 500)

    }

    return (
        <div className='searchable-list'>
            <input
                type='search'
                placeholder='search'
                onChange={handleChange}
            />
            <ul>
                {searchResults.map((item, i) => (
                    <li key={itemKeyFn(item)}>{children(item)}</li> // Use item.id or index for key
                ))}
            </ul>
        </div>
    );
}

export default SearchableList;


