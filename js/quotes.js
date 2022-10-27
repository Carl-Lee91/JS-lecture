const quotes = [
    { 
        quote: "I always wanted to play in English football and Arsenal and Highbury IS English football to me.",
        author: "- Dennis Bergkamp",
    },
    {
        quote: "I liked a fight and always stood up for myself. That’s how I was brought up. Coming from Holloway you learn from the pram to nut people that pick on you.",
        author: "- Charlie George", 
    },
    {
        quote: "Play for the name on the front of the shirt and they’ll remember the name on the back.",
        author: "- Tony Adams",
    },
    {
        quote: "It’s one-nil to the Arsenal. That’s the way we like it.",
        author: "- George Allison",
    },
    {
        quote: "A football team is like a beautiful woman. When you do not tell her, she forgets she is beautiful.",
        author: "- Arsene Wenger",
    },
    {
        quote: "When you start supporting a football club, you don’t support it because of the trophies, or a player, or history, you support it because you found yourself somewhere there; found a place where you belong.", 
        author: "- Dennis Bergkamp",
    },
    {
        quote: "We don’t sign superstars, we make them.",
        author: "- Arsene Wenger",
    },
    {
        quote: "What does Arsenal mean? It means class. The structure of the Club, everything has a classy feel about it. It isn’t always about success, there is more than that and this is what makes it a cut above the rest.",
        author: "- Charlie Nicholas",
    },
    {
        quote: "When Arsenal knocks on any door, it’s difficult to say no. When it knocks on my door, this is my house and it makes it very difficult.",
        author: "- Mikel Arteta",
    },
    {
        quote: "After winning, it’s hard to go to not winning.",
        author: "- Mikel Arteta",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;