import styles from './inputFormStyles.module.css'

export default function InputForm({handleChange,handleSubmit}) {
    
    return (

        <div className={`${styles.header} ${styles.spacer} ${styles.layer1}`}>
     
            <header className={`${styles.header}`}> 
                <h1 className={styles.h1}>English to IPA</h1>
                <h4 className={styles.h4}>Aprende la pronunciación de las palabras en inglés</h4>
            </header>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div className={styles.container} > 
                    <textarea className={styles.textArea} onChange={(e) => handleChange(e)} placeholder='Ingresa texto a transcribir fonéticamente' style={{}}/>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} type='submit'>
                            Ver pronunciación 
                        </button>
                    </div>
                </div>
            </form>
        
        </div>
    )
}