
import React, { useEffect, useState } from 'react';
import styles from '../css/result.module.css';
import ticket  from '../assets/image/mbti/ticket.png';
import mbtiMapping from '../core/MbitiMapping';

const Result = (props) => {
    const {ie,sn,tf,jp} = props

    const [resultMbti,setResultMbti] = useState('')
    
    useEffect(()=>{
        let mb = ''
        if(ie.indexOf(Math.max(...ie)) === 0) mb += 'I'
        else mb += 'E'
        if(sn.indexOf(Math.max(...sn)) === 0) mb += 'S'
        else mb += 'N'
        if(tf.indexOf(Math.max(...tf)) === 0) mb += 'T'
        else mb += 'F'
        if(jp.indexOf(Math.max(...jp)) === 0) mb += 'J'
        else mb += 'P'

        setResultMbti(mb)
    },[ie, jp, sn, tf]);

    return (
        <>
        <div style={{backgroundImage:`url(${ticket})`}} className={styles.resultDiv}>
            <h3>
                {resultMbti}
            </h3>
            <br/>
                <img src={ resultMbti !== '' && mbtiMapping.find(item => item.mbti === resultMbti).stamp } 
                    alt={ resultMbti !== '' && mbtiMapping.find(item => item.mbti === resultMbti).city } />
            <div>
                <div style={{ height:'30px' }}>{ resultMbti !== '' && mbtiMapping.find(item => item.mbti === resultMbti).title }</div>
                { resultMbti !== '' && mbtiMapping.find(item => item.mbti === resultMbti).description }
            </div>
        </div>
        </>
    );
};

export default Result;
