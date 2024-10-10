import React from 'react'
import './Homepage.css'
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

export default function Icons() {
    return (
        <div>
            <div className='p-5 icons'>
                <a href='#'><FaFacebook /></a>
                <a href='#'><FaLinkedinIn /></a>
            </div>

        </div>
    )
}
