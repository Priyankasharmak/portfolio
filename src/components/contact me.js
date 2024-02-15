import styles from '../styles/contact.module.css';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () =>{ 
    return ( 
        <div className={styles.bg}>
         <div className={styles.cont}>
           <div className={styles.text}>I Want to Hear From You</div>
           <div className={styles.text1}>Contact Me</div> 
            
            </div> 
            <div className={styles.par}>    
        <div className={styles.aboutleft}>
            <div className={styles.box1}>
            <div><FiPhoneCall className={styles.icn}/></div>
            <div >
                <div className={styles.par2} >Call Me</div>
                <div className={styles.par3} >+9876543210</div>
            </div>
            </div>
            <div className={styles.box1}>
            <div><MdOutlineMailOutline className={styles.icn}/></div>
            <div >
                <div className={styles.par2} >Email Me</div>
                <div className={styles.par3} >abcd@gmail.com</div>
            </div>
            </div>
            <div className={styles.box1}>
            <div><FiPhoneCall className={styles.icn}/></div>
            <div >
                <div className={styles.par2} >Location</div>
                <div className={styles.par3} >Banglore karnataka</div>
            </div>
            </div>
           </div>
        <div className={styles.aboutright}> 
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Enter Your Email'/>
        <input type="text" placeholder='Enter Subject' />
        <input type="text" placeholder='Your Message'/>


        </div>
        </div>
        
        </div>
     )
    }
 
export default  Contact;