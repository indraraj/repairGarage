import React from 'react';
import style from './RightGridProfileComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

const RightGridProfileComponent = (props) =>{
    return(
        <div className={style.RightGridProfileComponent}>
            <div className={style.credentials}>
                <div className={style.credentialsHeading}>
                    <span>Credentials</span>
                    <span>More</span>
                </div>
                <div className={style.credentialsContent}>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                        </div>
                        <div className={style.content}>
                            <p>Studies Computer Science at Sharda University, Noida</p>
                            <span>2011-2015</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                        </div>
                        <div className={style.content}>
                            <p>Livesin Bangalore, Karnataka, India</p>
                            <span>2018-present</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                        </div>
                        <div className={style.content}>
                            <p>440k</p>
                            <span>16.5K this month</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className={style.knowsAbout}>

            </div>
        </div>
    )    
}

export default RightGridProfileComponent;