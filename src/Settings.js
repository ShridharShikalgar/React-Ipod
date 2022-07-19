import React from 'react';
import { BsBatteryHalf } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';


class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                        <h5>iPod</h5>
                        < BsBatteryHalf style={styles.battery} />
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'column' , justifyContent: 'center' , alignItems : 'center'}}>
                < AiOutlineSetting style={styles.image} />
                <h4>Setting</h4>
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '30px',
        height: '30px',
    }
}

export default Settings;