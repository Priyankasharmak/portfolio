import styles from '../styles/home.module.css';
const Home = () => {
    return ( <div className={styles.bg}>
        <div className={styles.software}>SOFTWARE DEVELOPER</div>
        <div className={styles.hey} >Hey! I Am</div>
        <div className={styles.name}>Priya Sharma</div>
        <div className={styles.text}>A skilled software developer is a digital architect, orchestrating intricate code to build innovative applications that drive the modern world. They blend creativity and logic to solve complex problems, creating user-friendly software that transforms ideas into tangible, functional, and reliable digital experiences. They're the architects of our tech-driven future.</div>
        <button className={styles.btn}>Hire me</button>
    </div> );
}
 
export default Home;