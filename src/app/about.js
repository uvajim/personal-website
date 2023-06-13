import React from 'react';
import styles from '@/app/page.module.css';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileContent}
                 style={{
                     paddingLeft: "25px",
                     paddingRight: "25px"}}>
                <h1 className={styles.profileTitle}
                    style={{
                        color: "ivory",
                        paddingBottom: "35px"
                    }}
                >
                    Allow me to introduce myself.
                </h1>
                    <p className={styles.profileText}
                       style={{
                           color: "antiquewhite"
                    }}>
                        My name is Jinming, but I often just go by Jimmy. To give a quick intro, I'm the guy in
                        your class that can't sit still. I am determined and gritty. I thrive on pushing boundaries as I hate
                        being confined to the conventional. I love photography, chess, and learning new languages.
                    </p>
                <br/>
                <p className={styles.profileText}
                   style={{
                       color: "antiquewhite"
                   }}>
                    I love travelling, especially to places unfamiliar. It allows me to see fresh perspectives on life. I'm never afraid to take
                       risks and to trying new things even if I don't succeed the first time. I am a firm believer of fail fast and fail often.
                </p>
                <br/>
                <p className={styles.profileText}
                   style={{
                       color: "antiquewhite",
                }}>
                    My passion for software development was ignited by the creativity and challenge. To me,
                    writing good code is much like writing good poetry. Because of this, I take pride in writing concise
                    and fast code. As someone who is always curious, I enjoy learning new technology that enable me to
                    create products that will empower and provide meaningful impact. Some things that I have
                    learned by myself are Swift, SwiftUI, and Core Data for iOS development. As a matter of fact, this website was
                     a personal challenge to learn React.
                </p>
                <br/>
                <p className={styles.profileText}
                   style={{
                       color: "antiquewhite",
                   }}>
                    As a full-stack software engineer, I can design databases, craft backend servers in Express.JS or Flask, and creat
                    user-friendly front-end applications for web and mobile. I am quite versatile.
                </p>
                <br/>
                <p className={styles.profileText}
                   style={{
                       color: "antiquewhite",
                   }}>
                    If you would like to learn more about me, please check out my blog below. Everything written is
                    a reflection of myself and does not and should not represent anyone else. I write about things that interest me
                    or whatever is in my head on that day.
                    </p>
            </div>
            <img style={{
                width: '40%',
                height: '40%',
                paddingRight: "10px"
            }} src="/media/profile-picture-sample.jpeg" alt="Profile" />
        </div>
    );
};

export default Profile;
