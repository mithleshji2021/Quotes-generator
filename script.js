const button = document.querySelector(".button");
const quotesText = document.querySelector(".quotes");
const author = document.querySelector(".author");
const quotesDiv = document.querySelector(".quotes-div");



let quotesArray = [];
let currentIndex = 0;


async function getQuotes() {

    try {
        const response = await fetch('https://dummyjson.com/quotes')
        if (!response.ok) {
            throw new Error("Failed to fetch : " + response.statusText);
        }
        const data = await response.json();
        quotesArray = data.quotes;
        displayQuotes();
    }

    catch (error) {
        console.log(error);
    }
}



function displayQuotes() {
    if (quotesArray.length > 0) {
        const quote = quotesArray[currentIndex];
        quotesText.innerHTML = quote.quote;
        author.innerHTML = quote.author;

        currentIndex = (currentIndex + 1) % quotesArray.length;
    }
}

button.addEventListener("click", function () {
    if (quotesArray.length === 0) {
        getQuotes();
    }
    else if (quotesArray.length > 29) {
        getQuotes();

    }
    else {
        displayQuotes();
    }
});
