import React, { useState, useEffect } from 'react';

const KanjiDisplay = () => {
  const [kanjiData, setKanjiData] = useState([]);
  const [usedIds, setUsedIds] = useState(new Set());
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Soetch/kanmei/main/res/db/kanjis.json');
        const data = await response.json();
        setKanjiData(data.jlptn5);
        setCurrentId(getRandomUnusedId());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const getRandomUnusedId = () => {
    let randomId;

    do {
      randomId = Math.floor(Math.random() * kanjiData.length) + 1;
    } while (usedIds.has(randomId));

    setUsedIds(new Set(usedIds).add(randomId));
    return randomId;
  };

  const getRandomKanjiById = (id) => {
    const kanjiEntry = kanjiData.find(entry => entry.id === id);

    if (kanjiEntry) {
      return kanjiEntry.kanji;
    } else {
      return "Kanji not found";
    }
  };

  const handleClickNewKanji = () => {
    const newId = getRandomUnusedId();
    setCurrentId(newId);
  };

  return (
    <div>
      <h1>Random Kanji Display</h1>
      <p>Kanji: {currentId && getRandomKanjiById(currentId)}</p>
      <button onClick={handleClickNewKanji}>New Random Kanji</button>
    </div>
  );
};

export default KanjiDisplay;