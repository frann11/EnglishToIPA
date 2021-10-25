import styles from './textPronunciationStyles.module.css'

export default function TextPronunciation({textToTranslate,translatedText,loading}){
  
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.words}>
                    { loading ? <div style={{height:'100%',display:'grid',alignContent:'center'}}> <div className='spinner'></div>  </div>: 
                     textToTranslate.split(' ').map( (word,i) =>  
                    <div className={styles.individualColumns}>
                        <span className={styles.wordToTranslate}>
                            {word}
                        </span>
                        <span id={styles.translated}>
                            {translatedText.split(' ')[i]}
                        </span>
                    </div>) 
                    }
                </div>
            </div>
        </div>
    )
}