import styles from '../styles/about.module.css';

const About = () => {
    return (  
        <div className={styles.bg}>
            <div  className={styles.aboutleft}><img src="https://portfolio-theta-lake-73.vercel.app/mailcong.svg" alt="" /></div>
            <div className={styles.aboutright}>
            <div className={styles.software}>ABOUT Priya </div>
            <div className={styles.text}>WHY HIRE ME  FOR YOUR NEXT PROJECT ?</div>
            <div className={styles.ten}>As a full-stack developer, I bring a broad skill set to the table, encompassing machine learning, React, Next.js, Flutter, Java, Python, and Firebase. My passion lies in crafting inventive solutions, always at the forefront of technology. With a knack for creative problem-solving, I'm dedicated to delivering exceptional digital experiences. Let's collaborate to bring your ideas to life and create solutions that stand out in the ever-evolving world of software .</div>
            <div className={styles.my}>With experience in both front-end and back-end development, I'm equipped to tackle the full spectrum of software projects. </div>

<button className={styles.down}>DOWNLOAD CV</button>
</div>

</div>

    );
}
 
export default About;