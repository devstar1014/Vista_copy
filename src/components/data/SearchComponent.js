import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const elements = document.body.getElementsByTagName('*');
    const results = [];

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
        const text = element.textContent;
        if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
          if (!element.id) {
            element.id = `search-result-${i}`;
          }
          results.push({ id: element.id, text: text.trim() });
        }
      }
    }

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <a href={`#${result.id}`}>{result.text}</a>
          </li>
        ))}
      </ul>

      <ContentArea />
    </div>
  );
};

const ContentArea = () => {
  return (
    <div>
      <p>This is a sample paragraph about apples. Apples are delicious fruits.</p>
      <p>Bananas are yellow and curved. They are rich in potassium.</p>
      <p>Grapes come in different colors like green, red, and purple.</p>
      <p>Pineapples have a distinctive appearance and tropical flavor.</p>
    </div>
  );
};

export default SearchComponent;