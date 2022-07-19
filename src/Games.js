import React from 'react';
import { BsBatteryHalf} from 'react-icons/bs';


class Games extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
                 <div style={styles.titleBar}>
                        <h5>iPod</h5>
                        < BsBatteryHalf style={styles.battery} />
                    </div>
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.image} src="https://i.gifer.com/HMJj.gif" alt='game' />
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
        width:'100%',
        height:'100%',
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


export default Games;