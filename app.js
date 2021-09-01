var txtInput = document.querySelector('#txt-input')
var btnTranslate = document.querySelector('#btn-translate')
var baseUrl = 'https://api.funtranslations.com/translate/braille/html.json';
var output = document.querySelector('#output')

btnTranslate.addEventListener('click',translator);
function translator(){
    output.innerHTML='';
    btnTranslate.innerHTML = 'Translating...';
    fetch(getTranslationUrl(txtInput.value))
    .then((response) => response.json())
    .then((json) => {
        btnTranslate.innerHTML = 'Translate'            
        if(json.success){
            json.contents.translated.forEach(element => {
                output.innerHTML+=element
            });
        }   
        else{
            throw json.error;
        }    
    })
    .catch(errorHandler)
}

function errorHandler(error){
    alert(error.message)
}

function getTranslationUrl(text){
    return `${baseUrl}?text=${text}`;
}