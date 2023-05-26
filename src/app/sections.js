'use client';
import React, { useState } from 'react';
import styles from '@/app/page.module.css';
import Profile from "@/app/about";

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut, Animator} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

export function ProjectEntry({ href, src, title, description }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className={styles.projectEntry}>
            <img className={styles.projectImage} src={src} alt={title} />

            <a
                href={href}
                onClick={handleClick}
                style={{ color: isClicked ? '#fafbfc' : '#8f00ff' }}
            >
                {title}
            </a>

            <h2>{description}</h2>
        </div>
    );
}

export function ProjectVideoEntry({ href, src, title, description }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className={styles.projectEntry}>
            <video width="480" height="640" controls>
                <source src="/media/demo.mp4" type="video/mp4"/>
            </video>

            <a
                href={href}
                onClick={handleClick}
                style={{ color: isClicked ? '#fafbfc' : '#8f00ff' }}
            >
                {title}
            </a>

            <h2>{description}</h2>
        </div>
    );
}

export function Welcome(){
    return(
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "80px", color: "#fafbfc" }}>Welcome</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "80px", color: "#fafbfc" }}>こんにちは</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "80px", color: "#fafbfc" }}>Willkommen</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "80px", color: "#fafbfc" }}>你好 </span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "80px", color: "#fafbfc" }}>Bienvenido </span>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "40px", color: "#fafbfc" }}>Bienvenue</span>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}


export function About() {


    return(
    <div className={styles.experienceSection}>
        <h1 style={{paddingBottom: "50px"}}>About Me</h1>
        <Profile/>
    </div>
    );
}

export function Skills() {
    return(
        <div className={styles.experienceSection}>
            <h1>Skills</h1>
        </div>
    );
}

export function Experiences() {
    return (
        <div className={styles.experienceSection}>
            <h1>Experience</h1>
            <div className={styles.experienceContainer}>
                <img className={styles.image} src="/media/aws-logo.png" alt="AWS logo" />
                <div className={styles.jobEntry}>
                    <h2>Software Engineer Intern</h2>
                    <p>-Worked with manifest files and the adaption from one format to another.</p>
                    <p>-Setup meetings with customers of the final product to ensure that the product would be tailor made for them.</p>
                    <p>-Gathered requirements to determine a minimum viable product.</p>
                </div>
            </div>
            <div className={styles.experienceContainer}>
                <img className={styles.image} src="/media/aws-logo.png" alt="AWS logo" />
                <div className={styles.jobEntry}>
                    <h2>Software Engineer 1</h2>
                    <p>-Received a return offer and will be returning in August in the Seattle office </p>
                </div>
            </div>
        </div>
    );
}

export function Projects() {


    const [isClicked, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
    }

    return (
        <div className={styles.projectSection}>
            <h1>Projects</h1>
            <div className={styles.projectEntry}>
            <ProjectEntry
                href="https://github.com/uvajim/HokkaidoBlue.git"
                src ="/media/standardboard.png"
                title="Hokkaido Blue"
                description="Hokkaido Blue is an ongoing project of mine. It is a chess engine written in C++.
                    The program relies solely on bitwise operations and 64-bit integers to generate moves,
                    evaluate position, and ultimately win."
                />
                <ProjectVideoEntry
                    href="https://github.com/uvajim/Porter.git"
                    src={"/media/demo.mp4"}
                    title={"Porter"}
                    description="Porter was an iOS app I made for a entrepreneurship pitch challenege at UVA.
                                This app has multiple components, first is the frontend which was written in SwiftUI.
                                I used many async calls to ensure a responsive UI. I also incorporated MakKit to create
                                be able to show the area around a user's location. Second part was backend
                                comprising of AWS Lambdas in Javascript.
                                I also ran a flask server in order to make API Calls. Developement has been shelved as I never
                                got a call back :("
                    />
            </div>

        </div>
    );
}


export function Blog() {
    return(
        <div className={styles.experienceSection}>
            <h1>Blog</h1>
        </div>
    );
}