function inverterWord(word) {
    const wordArray = word.split("");
    const invertedWord = [];
    const invertedWordString = "";

    for (let i = wordArray.length; i >= 0; i -= 1) {
        invertedWord.push(wordArray[i]);
    }

    console.log(invertedWord.join(""));
}

inverterWord("fabiano");