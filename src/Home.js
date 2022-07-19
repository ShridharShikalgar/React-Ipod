import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BsBatteryHalf } from 'react-icons/bs';
import background from './assets/images/mountain.jpg'

class Home extends React.Component{
    
    
    render(){
        return(
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <div style={styles.titleBar}>
                        <h5>iPod</h5>
                        < BsBatteryHalf style={styles.battery} />
                    </div>
                    <ListGroup style={{borderRadius:'0'}}>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='NowPlaying'?'active':''}>
                            <b> Now Playing </b>{this.props.activeItem==='NowPlaying'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Music'?'active':''}>
                            <b> Music </b> {this.props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Games'?'active':''}>
                           <b> Games </b> {this.props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Settings'?'active':''}>
                           <b> Settings </b> {this.props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }
    
}

const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        height : '100%',
        width : '55%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1'
    },
    imageContainer : {
        height : '100%',
        width : '45%',
        backgroundImage : `url(${background})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 6px 6px 0'
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

export default Home;