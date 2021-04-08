
import Link from 'next/link'

const Header = () => {
    return (
        <div className='header'>
            <Link href='/'>
                <a id='logo'><span id='elogo'>E</span>ddynek </a>
            </Link>
            
            
            <div className='header-right'>
            <Link href='/'>
                <a>Create Ads</a>
            </Link>
            <Link href='/'>
                <a className='shift'>About Us</a>
            </Link>
            <Link href='/'>
                <a className='shift'>Log In</a>
            </Link>
            <Link href='/Register'>
                <a className='shift reg'>Register</a>
            </Link>
            </div>
            
        </div>
    )
}

export default Header
