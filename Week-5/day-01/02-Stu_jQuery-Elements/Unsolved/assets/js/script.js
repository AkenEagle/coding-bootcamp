const root = $("#root");

let author = $("<p></p>");

author.text("~ Carol Dweck");
author.addClass(`plain`);

let quote = $("<h1></h1>");

quote.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning");
quote.addClass(`fancy`);

quote.append(author);

root.append(quote);