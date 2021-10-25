import styles from './inputFormStyles.module.css'

export default function InputForm({handleChange,handleSubmit}) {
    
    return (

        <div style={{minHeight:'45vh',backgroundColor: '#282c34'}}>
     
            <header> 
                <h1>English to IPA</h1>
                <h4 >Aprende la pronunciación de las palabras en inglés</h4>
            </header>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div className={styles.container} > 
                    <textarea  onChange={(e) => handleChange(e)} placeholder='Ingresa texto a transcribir fonéticamente' style={{}}/>
                    <div className={styles.buttonContainer}>
                        <button type='submit'>
                            Ver pronunciación 
                        </button>
                    </div>
                </div>
            </form>
        
        </div>
    )
}