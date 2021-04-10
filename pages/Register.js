import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect, Component } from 'react';
<Head>

</Head>

function showClientForm(){
    
    var reg = document.getElementById('registers')
        var doc = document.getElementById('reg-client');
        doc.style.display = 'block'
        if (doc.style.display == 'block'){
                    reg.style.display = 'none'
                    
                } 
    }

function showAgentForm(){
    var reg = document.getElementById('registers')
        var agentForm = document.getElementById('reg-agent');
        agentForm.style.display = 'block'
        if (agentForm.style.display == 'block'){
                    reg.style.display = 'none'
                    
                } 
}

class Register extends Component{
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email:'',
            password:'',
            password2:''
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
      }
    
      handleSubmit(event) {
        console.log(this.state.fullname, this.state.email, this.state.password, this.state.password2);
        // console.log(event.target.value);
        event.preventDefault(); 
    }
    render(){
        return (
            <div id='register'>
                <section className='register' id="registers">
    
                    <p id='reg-as'>Register as </p>
                    <Link href = '/Register' id='agent-reg'>
                        <a id='agent-reg' onClick={ showAgentForm }> Agent</a>
                    </Link>
    
                    <Link href = '/Register'>
                        <a id ='client-reg' onClick={ showClientForm }> Client</a>
                    </Link>
                    <p id='already'>Already have an account? 
                    <Link href = '#'>
                        <a > SignIn</a>
                    </Link>
                    </p>
    
    
                </section>
                <section id='reg-agent' className='reg-form'>
                    <div className='reg-client'>
                        <p>Agent Sign Up </p>
                        <form onSubmit={this.handleSubmit}>
                            <input type='email' name="email"placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                            <input type='text' name="fullname"placeholder='fullname' value={this.state.fullname} onChange={this.handleChange} />
                            <input type='password' name="password"placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                            <input type='password' name="password2"placeholder='Confirm Password' value={this.state.password2} onChange={this.handleChange} />
                            <input type='submit' className='submit-btn' value ='submit' />
                        </form>
                    </div>
    
                </section>
    
                {/* client sign up */}
                <section id='reg-client' className='reg-form'>
                    <div className='reg-client'>
                        <p>Client Sign Up </p>
                        <form>
                            <input type='email' placeholder='Email' />
                            <input type='text' placeholder='Username' />
                            <input type='password' placeholder='Password' />
                            <input type='password' placeholder='Confirm Password' />
                            <button type='submit' className='submit-btn'>Sign Up</button>
                        </form>
                        
                    </div>
    
                </section>
                
            </div>
        )
    
    }
}



export default Register
