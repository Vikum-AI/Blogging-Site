import React from 'react'
import '../styles/trending.css'
import TrendingBlog from './trending-blog'

export default function trending() {
    return (
        <div className='trending'>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            <div className="topic">
            <span class="material-icons">trending_up</span>
            <p> TRENDING ON MEDIUM </p>
            </div>

            <div className="blogs-1">

                <TrendingBlog /> 
                <TrendingBlog /> 
                <TrendingBlog /> 
                
            </div>

            <div className="blogs-2">

                <TrendingBlog /> 
                <TrendingBlog /> 
                <TrendingBlog /> 

            </div>


            

        </div>
    )
}
