
import './App.css';
import {useState, useEffect } from 'react'
import TextPronunciation from './components/TextPronunciation';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import { removeWhiteSpaces } from './helpers';
import {getTranslation} from './services'

function App() {
  
  const [inputText,setInputText] = useState('The words pronunciation in the International Phonetic Alphabet will appear here.')
  const [textToTranslate,setTextToTranslate] = useState('The words pronunciation in the International Phonetic Alphabet will appear here.')
  const [translatedText, setTranslatedText] = useState('ðə wərdz prəˌnənsiˈeɪʃən ɪn ðə ˌɪnərˈnæʃənɑl fəˈnɛtɪk ˈælfəˌbɛt wɪl əˈpɪr hir.')
  const [loading,setLoading] = useState(false)

  function handleChange(e) {
    setInputText(removeWhiteSpaces(e.target.value))
  }

  async function handleSubmit(e){
    e.preventDefault()
    if (inputText != textToTranslate){
        setLoading(true)
        setTextToTranslate(inputText)
      }
    }
  
  useEffect(() => {
    getTranslation(textToTranslate).then((translatedText) => setTranslatedText(translatedText))
    .catch((e) => console.log(e))
    .then(() => setLoading(false)).catch((e) => console.log(e))
  }, [textToTranslate])

  return (
  <>
    <InputForm handleChange={handleChange} handleSubmit={handleSubmit} />
    <TextPronunciation textToTranslate={textToTranslate} translatedText={translatedText} loading={loading}/>
    <Footer/>
  </>
  );
}

export default App;
  