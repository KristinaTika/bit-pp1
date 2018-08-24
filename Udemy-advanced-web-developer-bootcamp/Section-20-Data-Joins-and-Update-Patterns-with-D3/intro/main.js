var quotes = [
    {
        quote: "I see dead people.",
        movie: "The Sixth Sense",
        year: 1999,
        rating: "PG-13"
    }, {
        quote: "May the force be with you.",
        movie: "Star Wars: Episode IV - A New Hope",
        year: 1977,
        rating: "PG"
    }, {
        quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
        movie: "Dirty Harry",
        year: 1971,
        rating: "R"
    }, {
        quote: "You had me at 'hello.'",
        movie: "Jerry Maguire",
        year: 1996,
        rating: "R"
    }, {
        quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
        movie: "Finding Nemo",
        year: 2003,
        rating: "G"
    }
];

var colors = {
    "G": "#3cff00",
    "PG": "#f9ff00",
    "PG-13": "#ff9000",
    "R": "#ff0000"
};

d3.select("#quotes")
    .style("list-style", "none")
    .selectAll("li")
    .data(quotes) // we want to take each piece of data in quotes array and attach it to a DOM element
    .enter() // we create li elements for ul list and connect it with each object inside an quotes array
    .append("li") // we append li to ul
    .text(function (data, i) { // data - the data bound to the current element I - index of the current element in the selection
        return "'" + data.quote + "' - " + data.movie + " (" + data.year + ")";
    })
    .style("margin", "20px")
    .style("padding", "20px")
    .style("font-size", function (data) {
        return data.quote.length < 25 ? "2em" : "1em"
    })
    .style("background-color", function (d) {
        return colors[d.rating]
    })
    .style("border-radius", "8px");

///////////////////////////////////


var nonRQuotes = quotes.filter(function (movie) {
    return movie.rating !== "R";
});

d3.selectAll("li")
    .data(nonRQuotes, function(d) {
        return d.quote;
    })
    .exit() // we want to remove quotes that don't match the condition in the filter function
    .remove()

    