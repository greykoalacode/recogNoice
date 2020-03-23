import React from 'react';

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            signInEmail: '',
            signInPassword:''
        }
    }
    onEmailChange =(event) => {
        this.setState({signInEmail : event.target.value})
    }

    onPasswordChange =(event)=> {
        this.setState({signInPassword : event.target.value})
    }
    onSubmitSignIn =()=>{
        fetch('https://sheltered-castle-52208.herokuapp.com/signin',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
            })
    }
    render(){
        const { onRouteChange } = this.props;
        return(
        
        <main  className="card br4 center">
            <div  className="measure">
                <fieldset id="sign_up"  className="ba b--transparent ph0 mh0">
                <legend  className="center title">Sign In</legend>
                <div  className="mt3">
                    <label  className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                    onChange={this.onEmailChange} 
                    className="pa2  input-reset ba b--black bg-transparent hover-bg-green hover-white w-100"
                     type="email"
                      name="email-address"
                        id="email-address"/>
                </div>
                <div  className="mv3">
                    <label  className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input  
                    className="b  pa2 input-reset ba b--black bg-transparent hover-bg-green hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"
                    onChange ={this.onPasswordChange}/>
                </div>
                </fieldset>
                <div  className="container">
                <input 
                    onClick={this.onSubmitSignIn} 
                    className="b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in"
                />
                <p  onClick={()=> onRouteChange('register')} className="f6 pointer link dim black db">Register</p>
                </div>
            </div>
        </main>

   
        );
    }
} 


export default Signin;