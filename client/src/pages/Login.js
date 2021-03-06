import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateView, updateUserData, updateIsLogged } from '../actions';

const Login = (props) => {
    const dispatch = useDispatch();
    //UserData
    const view = useSelector(state => state.view);
    const isLogged = useSelector(state => state.isLogged);

    const [authView, setAuthView] = useState('login');
    
    const [errorHandle, setErrorHandle] = useState([]);
    //Login
    const [loginEmail, setLoginEmail] = useState('legion@gmail.com');
    const [loginPassword, setLoginPassword] = useState('legion123');
    //Register
    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');

    //Login existing user - pass
    const login = (e, email, password) => {
        e.preventDefault();
        const details = {
            email: email,
            password: password
        }
        axios.post('/api/users/login', details)
        .then(res => {
            if (res.data === 'success') {
                axios.get('/api/users', {
                    params: {
                        email: loginEmail
                    }
                })
                .then(res => {
                    //set user data
                    const newUserData = res.data;
                    dispatch(updateUserData(newUserData));
                    //set headers
                    const userToken = res.headers["auth-token"];
                    sessionStorage.setItem('userToken', userToken);
                    //redirect to home
                    dispatch(updateIsLogged(true));
                    dispatch(updateView('home'));
                })
                .catch(err => {
                    console.log("Error: " + err);
                })
            } else {
                let match = res.data.match(/"([^"]*)"/);
                let error = [];
                switch (match[1]) {
                    case 'email':
                        error = ['login-email', res.data];
                        setErrorHandle(error);
                        setLoginEmail('');
                        break;
                    case 'password':
                        error = ['login-password', res.data];
                        setErrorHandle(error);
                        setLoginPassword('');
                        break;
                    default:
                        console.log('something went wrong...');
                }
            }
            console.log(res.data)
            // if (res.data.length > 15) {
            //     //Get User Data
            //     axios.get('/api/users', {
            //         params: {
            //             email: loginEmail
            //         }
            //     })
            //     .then(res => {
            //         //set user data
            //         const newUserData = res.data;
            //         props.setUserData(newUserData);
            //         //set headers
            //         const userToken = res.headers["auth-token"];
            //         sessionStorage.setItem('userToken', userToken);
            //         //redirect to home
            //         props.setIsLoggedIn(true);
            //         props.setView('home');
            //     })
            //     .catch(err => {
            //         console.log("Error: " + err);
            //     })
            // } else {
            //     let match = res.data.match(/"([^"]*)"/);
            //     let error = [];
            //     switch (match[1]) {
            //         case 'email':
            //             error = ['login-email', res.data];
            //             setErrorHandle(error);
            //             setLoginEmail('');
            //             break;
            //         case 'password':
            //             error = ['login-password', res.data];
            //             setErrorHandle(error);
            //             setLoginPassword('');
            //             break;
            //         default:
            //             console.log('something went wrong...');
            //     }
            // }
        })
    }

    //Register new user
    const register = (e) => {
        e.preventDefault();
        const payload = {
            name: regName,
            email: regEmail,
            password: regPassword
        }
        axios.post('/api/users/register', payload)
        .then(res => {
            if (res.data === 'success') {
                dispatch(updateView('login'));
                setErrorHandle('registered');
            } else {
                let match = res.data.match(/"([^"]*)"/);
                let error = [];
                switch (match[1]) {
                    case 'name':
                        error = ['register-name', res.data];
                        setErrorHandle(error);
                        setRegName('');
                        break;
                    case 'email':
                        error = ['register-email', res.data];
                        setErrorHandle(error);
                        setRegEmail('');
                        break;
                    case 'password':
                        error = ['register-password', res.data];
                        setErrorHandle(error);
                        setRegPassword('');
                        break;
                    default:
                        console.log('something went wrong...');
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <div  className="auth">
            <div className="auth__container">
                <h1><span onClick={() => setAuthView('login')} className={authView === 'login' ? 'active' : undefined}>Login</span> | <span onClick={() => setAuthView('register')} className={authView === 'register' ? 'active' : undefined}>Register</span></h1>
                {authView === 'login' &&
                <div className="login__container">
                    <form>
                        <input type="text" required placeholder={errorHandle[0] === 'login-email' ? errorHandle[1] : 'Email'}
                            value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}></input>
                        <input type="password" required placeholder={errorHandle[0] === 'login-password' ? errorHandle[1] : 'Password'}
                            value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}></input>

                        <button className="submit" onClick={(e) => login(e, loginEmail, loginPassword)}>Login</button>
                    </form>
                    {errorHandle === 'registered' &&
                    <p>Successfully registered!<br/>Please login.</p>
                    }
                </div>
                }
                {authView === 'register' &&
                <div className="register__container">
                    {errorHandle !== 'registered' &&
                    <form className="input-main">
                        <input type="text" required placeholder={errorHandle[0] === 'register-name' ? errorHandle[1] : 'Name'}
                            value={regName} onChange={(e) => setRegName(e.target.value)}></input>
                        <input type="text" required placeholder={errorHandle[0] === 'register-email' ? errorHandle[1] : 'Email'}
                            value={regEmail} onChange={(e) => setRegEmail(e.target.value)}></input>
                        <input type="password" required placeholder={errorHandle[0] === 'register-password' ? errorHandle[1] : 'Password'}
                            value={regPassword} onChange={(e) => setRegPassword(e.target.value)}></input>
                        
                        <button className="submit" onClick={(e) => register(e, regName, regEmail, regPassword)}>Register</button>
                    </form>
                    }
                </div>
                }
            </div>
        </div>
    )
}

export default Login