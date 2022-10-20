
import React from 'react'
import styles from './progress_bar.module.css'

  
const Progress_bar = ({progress,height}) => {
     
    const Parentdiv = {
        height: '4em',
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 40,
        margin: 50
      
    }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
  
        borderRadius:40,
        textAlign: 'right'
      }
      
   
      const none ={
        display: 'none'
      }
    return (
    <div style={Parentdiv}>
    {progress < 100? <>
        <div style={Childdiv} className={styles.Childdiv}>
     
      </div>
    </>: <>
    <div style={none}>
        
      </div>
    </>}
 
    </div>
    )
}
  
export default Progress_bar;