import axios from 'axios'

export const getTranslation = async function(textToTranslate){
    const translateText = (await axios.post('https://frann1870.pythonanywhere.com/wordsToIPA', {text:textToTranslate}))
    return(translateText.data)
}

