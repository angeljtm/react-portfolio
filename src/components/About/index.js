import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                    
                </h1>
                <p>
                Hello! I'm Angel Torres, a passionate college student currently immersed in the world of computer science.
                </p>
                <p>
                I'm pursuing my major at Fresno City College with big plans to transfer soon and continue my academic journey. My coding journey has led me through classes in C++ and Java, and I've got a solid grasp of HTML and CSS.
                </p>
                <p> 
                Beyond the screen, I find joy in capturing moments through film photography and maintaining a healthy lifestyle by indulging in my love for running. Life's an exciting blend of code, creativity, and the great outdoors for me!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F$"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                </div>
            </div>


        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default About