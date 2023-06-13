import React from 'react';
import styles from '@/app/page.module.css';

function NavigationBar() {
    return (
            <nav className={styles.menu}>
                <a href="#hero">//Home</a>
                <a href="#experience">//Experience</a>
                <a href="#projects">//Projects</a>
                <a href="#about">//About</a>
                <a href="#blog">//Blog</a>
            </nav>
    );
}

export default NavigationBar;
