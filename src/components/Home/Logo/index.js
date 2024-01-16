import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react'

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()


    return (
       <div className='logo-container' ref={bgRef}>
            <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
       </div>
    )
}

export default Logo