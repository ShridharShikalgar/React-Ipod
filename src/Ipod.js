import React from 'react';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import sound from './assets/music/talking_to_the_moon.mp3';
import { AiFillForward , AiFillBackward } from 'react-icons/ai';
import { BsFillPlayFill , BsPauseFill } from 'react-icons/bs';




class Ipod extends React.Component{

    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'Home',
            enter : 0,
            play : true
        }
    }

    rotateWheel = () => {

        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        // var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        
        if(self.state.enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){
                //Perform Operations
                
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
        
                if(newAngle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
        
    }

    changePage = () => {

        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else if(this.state.activeItem === 'NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'MyMusic'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
        
        
    }

    changePageToHomeScreen = () => {

        if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists'){
            this.setState({
                activeItem : 'Music',
                activePage : 'Home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }
        
    }

    toggle = () =>{
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
            console.log("toggled")
        }
    }

    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0];
        console.log(audio)
        this.setState({
            audio : audio,
        })
        console.log(this.state)
    }

    render(){
        return(
            <div style = {styles.ipodContainer}>

                    <audio className="audio-element">
                        <source src={sound}></source>
                    </audio>
                    
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio} />

                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <h4 onClick={this.changePageToHomeScreen} style = {{ fontSize : '1.5rem' , color: '#3f4c6b' }} >MENU</h4>
                        </div>
                        
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            
                            < AiFillBackward style = {styles.image} />
                            <div onClick={this.changePage} style={{background: '#3f4c6b' , width : '6rem' , height : '6rem' , borderRadius : '50%'}}></div>
                            < AiFillForward style = {styles.image}  />

                            
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div onClick={this.toggle} style = {styles.playButton}>
                            < BsFillPlayFill onClick={this.toggle} style = {styles.image}  />< BsPauseFill onClick={this.toggle} style = {styles.image} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

const styles = {
    ipodContainer : {
        height : '40rem',
        width : '25rem',
        backgroundImage: 'linear-gradient(#606c88 , #3f4c6b)',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
        
    },
    wheel : {
        width : '65%',
        height : '40%',
        margin : '1rem auto',
        background : 'linear-gradient(#E0EAFC , #CFDEF3)',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        // border : '1px solid black'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        // border : '1px solid black'
        
    },
    image: {
        alignSelf : 'center',
        fontSize: '2rem',
        color : '#3f4c6b'
    },
}

export default Ipod;