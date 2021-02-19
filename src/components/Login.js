import React ,{useState} from 'react';


export default function Login() {

    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(pState => ({
            ...pState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            
            const payload={
                "email":state.email,
                "password":state.password,
            }

            alert("Logged in Sucssfully " + payload.email);

           
        } else {
           console.log('Please enter valid username and password')    
        }
        
    }
    
    

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length) {
            sendDetailsToServer()
        } else {
            console.log('Passwords do not match');
        }
    }
    
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center" id="reg" >
            <form>
                <div className="form-group text-left">
                <label style={{marginTop: 5}} htmlFor="exampleInputEmail1">Email address</label>
                <input  type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <button style={{marginBottom: 5}}
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Submit
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert"> 
                {state.successMessage}
            </div>
        </div>
    )
}

// export default withRouter(Login);

