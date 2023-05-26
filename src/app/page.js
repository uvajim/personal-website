'use client'

import styles from './page.module.css';
import {About, Projects, Experiences, Blog, Welcome} from "./sections";





import React from "react";
import NavigationBar from "@/app/navigationbar";



export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img className={styles.image}
                     style={{
                        }}
                     src={"/media/headshot.png"}
                />
                <NavigationBar/>
            </header>


            <section id="hero">
                <Welcome/>
            </section>

            < section id="experience" >
                <Experiences/>
            </section>

            < section id="projects" >
                <Projects/>
            </section>

            < section id="about" >
                <About/>
            </section>

            < section id="blog" >
                <Blog/>
            </section>


            <footer className={styles.footer}>
                {}
            </footer>
        </div>
    );
}
