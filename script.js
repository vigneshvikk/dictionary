function searchWord(){
    word1=word.value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word1}`)
    .then(data => data.json()).then(data=>display(data))

   
}

function display(WordData){

    meaning=WordData[0].meanings[0].definitions[0].definition
    word2=WordData[0].word
    // aud=WordData[0].phonetics[0].audio


    result.innerHTML=`
    
    <h1><srong> ${word2} </srong> </h1>
    <p> ${meaning} </p>
    `
}

