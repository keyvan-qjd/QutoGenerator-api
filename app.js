var quoteList =[];
async function getQuote (){
    var response = await fetch('https://api.quotable.io/random',{method: 'GET'})
    var result = await response.json()
    printQuto(result.response)
    quoteList.push(createQuoteTag(result.content, result.author));
    printQuote() // Or a more informative message
}

function printQuote(response){
    document.querySelector('body').append(...quoteList)
}

function createQuoteTag(quto){
    var pTag = document.createElement('p');
    pTag.innerText = quto.response
    return pTag
}


