import React from 'react'
import Logo from './logo'
import '../styles/header.css'


const image = require('../Resources/icons8-medium.svg')

export default function header() {
    return (
        <div>
            <header>
                <Logo /> 

                <nav>
                    <ul>

                        <li><a href="#"> Our Story </a></li>
                        <li><a href="#"> Membership </a></li>
                        <li><a href="#"> Write </a></li>
                        <li><a href="#"> Sign-in </a></li>
                        
                        <button>Get Started</button>

                    </ul>
                </nav>

            </header>
        </div>
    )
}
