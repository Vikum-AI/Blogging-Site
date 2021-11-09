import React from 'react'
import image from '../Resources/4_BIK9VGjeCj2TaTDw4id2nA.png'
import '../styles/banner1.css'


export default function banner1() {
    return (
        <div className='banner1'>

            

            <div className="text">

            <h1>Medium is a place <br /> to write, read, and <br /> connect</h1>
            <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>

            <button> Start Writing </button>

            </div>

            

            <img className='image' src= { image } alt="" />

            

           

        </div>
    )
}

//