import Head from 'next/head'
import Link from 'next/link'
<Head>

</Head>


const  Register = () => {
    return (
        <div id='register'>
            <section className='register'>

                <p id='reg-as'>Register as </p>
                <Link href = '/Register' id='agent-reg'>
                    <a id='agent-reg'> Agent</a>
                </Link>

                <Link href = '/Register'>
                    <a id ='client-reg'> Client</a>
                </Link>
                <p id='already'>Already have an account? 
                <Link href = '#'>
                    <a > SignIn</a>
                </Link>
                </p>


            </section>
            <section id='reg-client'>
                <div className='reg-client'>
                    <p>Sign Up </p>
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Username' />
                    <input type='password' placeholder='Password' />
                    <input type='password' placeholder='Confirm Password' />
                    <button type='submit' className='submit-btn'>Submit</button>
                </div>

            </section>
            
        </div>
    )
}

export default Register
