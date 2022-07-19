import React from 'react';
import artistImage from './assets/images/Shridhar.jpeg';
import { BsBatteryHalf, BsApple } from 'react-icons/bs';

class Artists extends React.Component {

    render() {
        return (
            <div style={styles.artistsContainer}>

                <div style={styles.titleBar}>
                    <h5>iPod</h5>
                    < BsBatteryHalf style={styles.battery} />
                </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{ marginBottom: '0.5rem' }}>iPod <span> < BsApple style={{ marginBottom: '0.5rem' }} /> </span></h4>
                        <p style={{ marginBottom: '0' }}>A React Project</p>
                        <p>Made by Shridhar</p>
                    </div>

                </div>
            </div>
        );
    }

}

const styles = {
    artistsContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    imageContainer: {
        height: '70%',
        width: '40%',
        borderRadius: '50%',
        backgroundImage: `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf: 'center'
    },
    image: {
        width: '2rem',
        height: '2rem'
    },
    info: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    subInfo: {
        alignSelf: 'center'
    },
    titleBar: {
        height: '10%',
        width: '100%',
        borderRadius: '12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding: '1px 5px 10px 8px',
        display: 'flex',
        flexDirecton: 'row',
        justifyContent: 'space-between'

    },
    battery: {
        width: '30px',
        height: '30px',
    }
}

export default Artists;