
import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: '1em',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      
    }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
    
      const none ={
        display: 'none'
      }
    return (
    <div style={Parentdiv}>
    {progress < 100? <>
        <div style={Childdiv}>
     
      </div>
    </>: <>
    <div style={none}>
        
      </div>
    </>}
 
    </div>
    )
}
  
export default Progress_bar;