var qutolist =[];
async function getQuto (){
    var response = await fetch('https://api.quotable.io/random',{method: 'GET'})
    var result = await response.json()
    printQuto(result.response)
}

function printQuto(response){
    response.forEach((quto) => {
        console.log("createNewQuto : ", createQutoTag(quto));
    });
    document.querySelector('body').append(...qutolist)
}

function createQutoTag(quto){
    var pTag = document.createElement('p');
    pTag.innerText = quto.response
    return pTag
}
