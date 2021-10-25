import heart from '../assets/heart.png';
import styles from './footerStyles.module.css'

export default function Footer(){
    return(
        
      <footer>
        <div className={styles.container}>
            <h6>
                <i><a style={{textDecoration:'none',color:'white'}} href='https://www.github.com/frann11'>Github</a></i>
            </h6> 
            <h6>
                <i> Con <img  className={styles.heart} src={heart}/> fran</i>
            </h6>
        </div>
      </footer>
    )
}