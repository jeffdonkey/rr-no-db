const React = require ('react')
const Def = require ('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/dog.jpg" alt="dog" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Chris Del</a> on <a href="PLACE-PUPPY_LINK"></a>
                    </div>
                </div>
            </main>
        </Def>
    )
    
}

module.exports = error404
