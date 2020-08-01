import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            name: ''
        }
    }
    onNameChange =(event) => {
        this.setState({name : event.target.value})
    }
    onEmailChange =(event) => {
        this.setState({email : event.target.value})
    }

    onPasswordChange =(event)=> {
        this.setState({password : event.target.value})
    }

    onSubmitSignIn =()=>{
        fetch('https://sheltered-castle-52208.herokuapp.com/register',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
        }      
    render(){
        // const{ onRouteChange } = this.props;
        return(
            <main  className="card center">
                <div  className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend  className="center title">Register</legend>
                    <div  className="mt3">
                        <label  className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input  
                        className="pa2 input-reset ba b--black bg-transparent hover-bg-green hover-white w-100" 
                        type="text" 
                        name="name"  
                        id="name"
                        onChange={this.onNameChange}/>
                    </div>
                    <div  className="mt3">
                        <label  className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input  
                        className="pa2 input-reset ba b--black bg-transparent hover-bg-green hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}/>
                    </div>
                    <div  className="mv3">
                        <label  className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input  
                        className="b  pa2 input-reset ba  b--black bg-transparent hover-bg-green hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}/>
                    </div>
                    </fieldset>
                    <div  className="">
                    <input 
                        onClick={this.onSubmitSignIn} 
                        className="b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"
                    />
                    </div>
                </div>
            </main>
    
        );
    }
} 

export default Register;