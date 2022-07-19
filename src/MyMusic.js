import React from 'react';
import { BsBatteryHalf } from 'react-icons/bs';


class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
    }

   
    componentDidMount(){
        let self = this;
        self.props.audio.play();

       
            self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                    console.log(fill);
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false;
    }

    render(){
         let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>
                <div style={styles.titleBar}>
                        <h5>iPod</h5>
                        < BsBatteryHalf style={styles.battery} />
                </div>

                <div style={styles.info}>
                    <img style={styles.image} src="https://i1.sndcdn.com/artworks-000100419551-3tmztt-t500x500.jpg" alt='cover'></img>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>Talking to the moon</h4>
                        <p style={{marginBottom:'0'}}>Song by </p>
                        <p>Bruno Mars</p>
                    </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
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


export default MyMusic;