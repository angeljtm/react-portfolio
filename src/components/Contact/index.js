import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_0h2fzyi',
            'template_4fy2nqw',
            form.current,
            'xQE29wgShS59sE_s6'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
        )
    }
    
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    Hey, I'd love to hear about opputunities and/or talk! Send me an email using the form below. If that doesn't work, my email is to the right :)
                </p>
                <div className='contact-form'>
                    <form ref={form} on onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input placeholder='Name' type='text' name='name' required/>
                            </li>
                            <li className='half'>
                                <input placeholder='Email' type='email' name='email' required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Angel Torres
                <br/>
                Fresno, California
                <br/>
                93721
                <br/>
                <span>anjeltor@icloud.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[36.7378, -119.7871]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[36.7378, -119.7871]}>
                        <Popup>Angel lives here, come on over for a cup of coffe :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default Contact