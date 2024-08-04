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
        // Generate a unique ID if the element doesn't have one
        if (!element.id) {
          element.id = `searchd-result-${i}`;
        }
        results.push({ id: element.id, text: text.trim() });
      }
    }
  }

  setSearchResults(results);
};