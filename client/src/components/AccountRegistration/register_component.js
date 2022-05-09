/*\
 *
 *  Register a new account
 * 
\*/

import React from 'react';
import './AccountRegistration.css';

const Register = () => {
    return (
		<>
        <h1 className="login-centered">EasyEatsTU Account Registration</h1>
		<form class = "suContent" method = "get">
			<div class = "contain">
				<h2>Please Fill Out The Fields To Sign Up</h2>
				<hr/>
				<label for = "uname">Username</label><br></br>
				<input type = "text" id = "uname" name = "uname" placeholder = "Enter Username" required/><br></br>
					
				<label for = "email">Email Address</label><br></br>
				<input type = "text" id = "email" name = "email" placeholder = "Enter Email" required/><br></br>
					
				<label for = "pword">Password</label><br></br>
				<input type = "password" id = "pword" name = "pword" placeholder = "Enter Password" required/><br></br>
				<label for = "vpword">Verify Password</label><br></br>
				<input type = "password" id = "vpword" name = "vpword" placeholder = "Verify Password" required/><br></br>
					
				<div class = "clear">
					<button type = "reset" class = "cancel">Clear</button>
					<button type = "submit" class = "signup">Sign Up</button>
				</div>
			</div>
			<button type = "button" class = "home">Back to Homepage</button>
		</form>
		</>
    );
}

export default Register;
