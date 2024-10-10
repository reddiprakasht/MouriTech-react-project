import React, { useState } from 'react';
import './Homepage.css';

export default function Homepage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const gmail = "reddiprakasht1122@gmail.com";
    const phoneNumber = "8465042609"

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(gmail);
        alert("Email copied to clipboard!");
    };

    return (
        <div className='About container'>
            <div className='About-content'>
                <h1>HI, I'm <br/> Reddi Prakash Tharigonda</h1>
                <h3>Frontend Developer</h3>
                <p>
                    Hello! I’m a dedicated front-end developer specializing in ReactJS, with a strong foundation in HTML, CSS, and JavaScript. 
                    I have a passion for crafting dynamic and responsive web applications that deliver exceptional user experiences. 
                    My expertise extends to utilizing Bootstrap for efficient styling and design, ensuring that my projects are not only functional 
                    but also visually appealing. I’m also experienced in version control systems, which allows me to collaborate effectively 
                    and manage project workflows seamlessly. Whether I’m building a new feature or optimizing existing code, 
                    I’m committed to continuous learning and improvement. Let’s work together to bring your vision to life!
                </p>
                
                <div className='row btn-box'>
                    <div className='col-12 col-sm-4 mb-2'>
                        <a href='https://in.linkedin.com/' className='btn btn-primary w-100'>Hire Me</a>
                    </div>
                    <div className='col-12 col-sm-4 mb-2'>
                        <a 
                            className='btn btn-secondary w-100' 
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Let’s talk
                        </a>
                    </div>
                    <div className='col-12 col-sm-4 mb-2'>
                        <a href='#' className='btn btn-success w-100'>See My Work</a> 
                    </div>
                </div>

                {isPopupOpen && (
                    <div className='popup'>
                        <div className='popup-content'>
                            <span className='close' onClick={() => setIsPopupOpen(false)}>&times;</span>
                            <p>{gmail} / {phoneNumber}</p>
                            <button onClick={handleCopyEmail} className='btn btn-info'>Copy Email</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
