import React, { useState } from 'react';
import styles from '../css/start.module.css'
import covers from '../assets/image/mbti/cover.png'
import coverChain from '../assets/image/mbti/coverChain.jpg' 
import calender from '../assets/image/mbti/calender.png'
import title from '../assets/image/mbti/title.png'
import start from '../assets/image/mbti/start.png'

const Start = (props) => {
    const {nextStatus} = props
    const[butDis,setButDis] = useState(false)

    const startClick = () => {
        setButDis(true);
        setTimeout(() => {
            nextStatus();
        }, 1490);
    };

    return (
        <div>
            <div className={styles.main}>
                <div className={`${styles.calender} ${butDis && styles.roll}`}
                style={{backgroundImage:`url(${calender})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
                    <p className={`${styles.day} ${butDis && styles.fadeOut}`}>
                        GO!
                    </p>
                </div>
            </div>
            <div className={styles.noteDiv} style={{backgroundImage:`url(${covers})`,backgroundSize:'10%'}}>
                    <div className={styles.chainDiv} style={{backgroundImage:`url(${coverChain})`,backgroundSize:'100%'}}></div>
                    <div className={`${styles.contentDiv} ${butDis && styles.fadeOut}`}>
                        <div className={styles.title} style={{backgroundImage:`url(${title})`,backgroundSize:'100%'}}>
                            서연이의 여행 MBTI
                        </div>
                        <button className={styles.start} onClick={()=>startClick()} 
                        style={{backgroundImage:`url(${start})`,backgroundSize:'100%'}}
                        disabled={butDis}></button>
                    </div>
            </div>
        </div>
    );
};

export default Start;