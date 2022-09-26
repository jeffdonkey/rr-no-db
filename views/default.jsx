// imports "React"
const React = require('react')

//Stub function/Method stub
//this is a piece of code used to stand in for some other programming functionality.
//so can be a placeholder or used for testing
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
