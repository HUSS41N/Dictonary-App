// https://api.dictionaryapi.dev/api/v2/entries/en/hello

getDictonary = (word) => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const DictonaryPromise = fetch(URL)
    return DictonaryPromise.then((response)=>{
        return response.json()
    })
}


getDictonaryData = () => {
    word = document.getElementById('word').value
    if(word == ''){
        document.getElementById('data').innerHTML = 'Invalid Input'
    }
    else{
        getDictonary(word).then((res)=>{
            showDictoanryDataToUser(res)
            console.log(res);
            console.log(res[0].meanings[0].definitions[0]['definition']);
        }).catch((error)=>{
            document.getElementById('data').innerHTML = 'Check your spelling & Try Again';
          })
    }

}

showDictoanryDataToUser = (res) => {
    document.getElementById('data').innerHTML = res[0].meanings[0].definitions[0]['definition']
}