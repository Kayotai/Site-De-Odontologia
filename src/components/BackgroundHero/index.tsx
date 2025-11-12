import React from 'react'
import './index.component.css'



export default function BgHero({ children } : { children: React.ReactNode })
{
    return ( 
        <div className="backgroundHero"> 
            {children} 
        </div> )
}