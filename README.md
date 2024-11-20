# Markdown to HTML Converter

The Markdown to HTML Converter is a lightweight, easy-to-use NPM package that allows you to convert Markdown files or strings into HTML. It is perfect for developers looking to integrate Markdown parsing into their web applications, static site generators, or any other project that requires converting Markdown content to HTML.

``` JavaScript 
import plaintohtml from "markdown-to-htm"

let plain = "# hello ho are you"
const htmlis = plaintohtml(plain)

console.log(htmlis);
```
`output: <h1 class='h1'>hello ho are you</h1>`

add this .css file

you can also update styles for your choice and also add media query for different screen sizes

``` css
index.css
* {
    appearance: none;
}

.h1 {
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 2px;
}

.h2 {
    font-size: 30px;
    font-weight: 600;
}

.h3 {
    font-size: 20px;
    font-weight: 600;
}

.a {
    color: rgb(204, 255, 238);
    text-wrap:wrap;
}

ul li {
    list-style-type: square;
    margin-left: 2rem;
    line-height: 2rem;
}

ol li {
    margin-left: 2rem;
    list-style-type: decimal;
}

hr {
    margin: 1rem 0;
    border-top-width: 1px;
    border-top-color: rgb(230, 254, 255);
}

.blok {
    padding-left: 1rem;
    margin-left: 1rem;
    border-left: 4px solid white;
    height: fit-content;
}

.pre {
    margin: 0.5rem auto;
    width: 95%;
    color: white;
    padding: 0.5rem;
    background-color: rgba(41, 41, 41, 0.477);
    font-size: 0.8rem;
    border-radius: 0.5rem;
    display: block;
    
}
.inline {
    width: 95%;
    color: white;
    padding: 0.3rem 0.5rem ;
    background-color: rgba(41, 41, 41, 0.477);
    font-size: 0.8rem;
    border-radius: 0.3rem;
    display:inline;
}
.img{
    width: 50%;
    heigth: auto;
    object-fit: cover;
}

.table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
    line-height: 1.4;
    color: #e0e0e0; /* Light text color for dark backgrounds */
    background-color: #1e1e1e; /* Dark background color for the table */
}

.table th, .table td {
    padding: 12px 15px;
    border: 1px solid #333; /* Darker border color */
}

.table th {
    background-color: #2d2d2d; /* Slightly lighter background for headers */
    font-weight: 600;
}

.table tr:nth-child(even) {
    background-color: #2d2d2d; /* Alternate row color for readability */
}

.table tr:hover {
    background-color: #333; /* Highlight row on hover */
}

.table thead th {
    background-color: #2a2a2a; /* Slightly darker background for the header */
    border-bottom: 2px solid #444; /* Darker bottom border */
}

```

Using Markdown syntex:
```
H1 heading = # text
H2 heading = ## text
H3 heading = ### text
Bulleted list = * text
Numbered list = ^ text
Bold = **text**
Code block = ``` code ```
inline Code block = ` code `
Blockquote = > text
insert link = [URL](NAME)
Text divider or horizontal line = ---
image = ![alt](href)
image = ![alt](href)
Markdown tables are created using pipes (|) to separate columns and hyphens (-) to define the header row. Here's a basic example:
| Header 1   | Header 2   | Header 3   |
|------------|------------|------------|
| Row 1 Col 1| Row 1 Col 2| Row 1 Col 3|
| Row 2 Col 1| Row 2 Col 2| Row 2 Col 3|

```
