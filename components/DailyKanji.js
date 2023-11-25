import React, { useState } from 'react';

const fs = require("fs")

// Read the JSON file
const rawData = fs.readFileSync('jlptn5.json');
const jlptn5Data = JSON.parse(rawData);

const getRandomUnusedId = () => {
    let randomId;

    do {
        randomId = Math.floor(Math.random() * jlptn5Data.jlptn5.length) + 1;
    } while (usedIds.has(randomId));

    usedIds.add(randomId);
    return randomId;
};

const getRandomKanjiById = (id) => {
    const kanjiEntry = jlptn5Data.jlptn5.find(entry => entry.id === id);

    if (kanjiEntry) {
        return kanjiEntry.kanji;
    } else {
        return "Kanji not found";
    }
};

const KanjiDisplay = () => {
    const [usedIds, setUsedIds] = useState(new Set());
    const [currentId, setCurrentId] = useState(getRandomUnusedId());

    const handleClickNewKanji = () => {
        const newId = getRandomUnusedId();
        setCurrentId(newId);
    };

    return (
        <div>
            <h1>Random Kanji Display</h1>
            <p>Kanji: {getRandomKanjiById(currentId)}</p>
            <button onClick={handleClickNewKanji}>New Random Kanji</button>
        </div>
  );
};

export default DailyKanji;
