this is markdown to html

```
import plaintohtml from "markdown-to-htm"

let plain = "# hello ho are you"
const htmlis = plaintohtml(plain)

console.log(htmlis);
```
`output: <h1 class='h1'>hello ho are you</h1>`

add this .css file

```
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
                    Blockquote = &gt; text
                    insert link = [URL](NAME)
                    Text divider = ---
```