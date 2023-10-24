"use client";
import React from 'react'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from "react-tsparticles"
import particlesConfig from "../config/particles-config"

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, []);

    return (
        <div id="particle-background">
            <Particles 
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
            />
        </div>
    )
}

export default ParticleBackground;