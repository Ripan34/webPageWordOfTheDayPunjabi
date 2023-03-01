import React from "react";
import styles from './Home.module.css';
import sv from './lgR.png';
import dnd from './dnd.svg';
import pApp3 from './punApp3.png';
import pApp4 from './punApp4.png';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img alt="logo" src={sv}/>
                <h1 >Word of the day <span>Punjabi</span></h1>
                <div className={styles.desc}>
                    Learn and  Share 
                </div>
                <div className={styles.desc}>
                    Daily Punjabi words, text extraction from images,
                </div>
                <div className={styles.desc}>
                    and easy sharing and printing options.
                </div>
                <a href="https://apps.apple.com/us/app/word-of-the-day-punjabi/id1672417514">
                    <img alt="download" className={styles.dnd} src={dnd}/>
                </a>
                <div className={styles.cpyR}>&copy; COPYRIGHT 2023, Word of the day Punjabi.</div>
                <a className={styles.priv} href="https://www.privacypolicies.com/live/7d6255bf-0fbe-4523-bf28-ddeaf0547500">Privacy Policy</a>
            </div>
            <div className={styles.right}>
                <img alt="phone" className={styles.pApp1} src={pApp3}/>
                <img alt="phone" className={styles.pApp4} src={pApp4}/>
            </div>
        </div>
    )
}
export default Home;