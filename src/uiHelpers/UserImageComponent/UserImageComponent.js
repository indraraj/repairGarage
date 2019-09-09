import React from 'react';
import styles from './UserImageComponent.module.scss';
import Images from '../../assets/images/Images ';
import {withRouter} from 'react-router';

const UserImageComponent = (props) =>{
    const imgPath = Images[props.imgName]
    const imgStyle = {
        width: props.size,
        height: props.size
    }
    return (
        <img src={imgPath} style={imgStyle} className={styles.UserImageComponent} alt={props.imgText} onClick={() => props.history.push('/profile')}></img>
    )
}

export default withRouter(UserImageComponent);