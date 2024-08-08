const plaintohtml =(markdown)=>{
    function escapee(str) {
        return str.replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/# /g, '&num; ')
            .replace(/\*/g, '&ast;')
            .replace(/\[/g, '&lbrack;')
            .replace(/\]/g, '&rbrack;')
            .replace(/}/g, '&rbrace;')
            .replace(/{/g, '&lbrace;')
            .replace(/```/g, '&grave;')
            .replace(/'/g, '&#039;');
    }
    let html = markdown
        .replace(/```([\s\S]*?)```/gim, (_, p1) => `<pre class='pre'><code>${escapee(p1)}</code></pre>`)
        .replace(/`([\s\S]*?)`/gim, (_, p1) => `<pre class='inline'><code>${escapee(p1)}</code></pre>`)
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a class='a' target='_blank' href='$1'>$2</a>")
        .replace(/^# (.*$)/gim, "<h1 class='h1'>$1</h1>")
        .replace(/^## (.*$)/gim, "<h2 class='h2'>$1</h2>")
        .replace(/^### (.*$)/gim, "<h3 class='h3'>$1</h3>")
        .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
        .replace(/^\*(.*$)/gim, "<ul><li>$1</li></ul>")
        .replace(/<\/ul>\s*<ul>/gim, "")
        .replace(/^\^(.*$)/gim, "<ol><li>$1</li></ol>")
        .replace(/<\/ol>\s*<ol>/gim, "")
        .replace(/^>(.*$)/gim, '<blockquote class="blok" >$1</blockquote>')
        .replace(/<\/blockquote>\n<blockquote>/gim, '<br/>')
        .replace(/^---/gm, "<hr />")
        .replace(/\n/gim, "<br />")

        /* Support for images */
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img class='img' src='$2' alt='$1' />")

        /* Support for tables */
        .replace(/^\|(.+)\|$/gm, (match, p1) => {
            const rows = p1.split('|').map(row => `<td>${row.trim()}</td>`).join('')
            return `<tr>${rows}</tr>`;
        })
        .replace(/(<tr>[\s\S]+<\/tr>)(\n|$)/gim, (match, p1) => `<table>${p1}</table>`)

        /* Improved horizontal rule support */
        .replace(/^\s*[-*_]{3,}\s*$/gm, "<hr />");

    return html
}

export default plaintohtml