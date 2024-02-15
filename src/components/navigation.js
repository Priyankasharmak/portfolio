
import styles from '../styles/navigation.module.css';
const Navigation = () => {
    return ( 
        <div className={styles.box1}>
            <div className={styles.box2}>Pro.dev</div>
            <img src="developers.png" alt="" class="Navbar_imglog__a67pD"></img>
            <div className={styles.box3}>
                 <div className={styles.box6}>HOME</div>
                 <div className={styles.box4}>ABOUT</div>
                 <div className={styles.box4}>SERVICE</div>
                 <div className={styles.box4}>SKILLS</div>
                 <div className={styles.box4}>MY WORK</div>
                 <div className={styles.box4}>CONTACT</div>
                 <div className={styles.box5}>CONTACT ME</div>
            </div>
            
        
        </div>
        
     );
}
 
export default Navigation;