import React from 'react'
import image from '../Resources/1*HXzEa52T4diCMHVWKpfdWg.jpeg'
import '../styles/blogs.css'

export default function blogs() {
    return (
        <div className='blogs'>

                <div className="content">
                
                    <div className="title">
                        <span class="material-icons">person</span>
                        <h3>Author Name</h3>
                    </div>

                    <div className="para">
                        <h2>Why Elon Musk Fired His Long-Term Assistant Who Asked for A Raise ?</h2>
                        <p>Here is what you can learn form it.</p>
                    </div>

                    <div className="date">
                        <p>Oct 25  .   5min read</p>
                    </div>

                </div>

                <div className="image">
                    <img src= { image } alt="" />
                </div>
                
        </div>
    )
}
