import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import { connect, useDispatch } from 'react-redux';
import "./index.css";
import { loadAllUser } from '../../shared/actions/users';

const Login = (option) => {
    const cookies = new Cookies();
    const history = useHistory();
    const dispatch = useDispatch();
    const [usernameState, setUsernameState] = useState('');
    const [errorState, setErrorState] = useState('')
    const [passwordState, setPasswordState] = useState('');
    useEffect(() => {
        if (option.isLogout) {
            cookies.remove("myData");
        }
        else {
            dispatch(loadAllUser([]))
        }
    }, []);
    const signin = () => {
        if (option?.allUser?.length == 0) {
            dispatch(loadAllUser([]))
        }
        if ((usernameState.trim() === '' || passwordState.trim() === '')) {
            let message = `Username ${usernameState.trim() === '' && passwordState.trim() === '' ? 'and' : 'or'} Password`;
            setErrorState(`Please enter ${message}`)
            return;
        }
        let userData = option.allUser.find((val) => {
            if ((val.name.includes(usernameState))) {
                return val;
            }
        })
        if (userData && (userData.name === usernameState && userData.birth_year === passwordState)) {
            cookies.set('myData', usernameState);
            history.push("/starwars");
        } else {
            setErrorState('You might have misspelled your username or password!');
        }
    }

    return (
        <div className="page-login ui centered grid container">
            <div className="nine wide column">
                <div className="ui icon warning message">
                    <i className="lock icon"></i>
                    <div className="content">
                        <div className="header">
                            {errorState === '' ? 'STAR WARS APP LOGIN' : 'Login failed!'}
                        </div>
                        <p>{errorState}</p>
                    </div>
                </div>
                <div className="ui fluid card">
                    <div className="content">
                        <div className="ui form">
                            <div className="field">
                                <label>User</label>
                                <input type="text" name="user" placeholder="User" onChange={(event) => {
                                    setUsernameState(event.target.value);
                                }} />
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="pass" placeholder="Password" onChange={(event) => {
                                    setPasswordState(event.target.value);
                                }} />
                            </div>
                            <button className="ui primary labeled icon button" onClick={signin}>
                                <i className="unlock alternate icon"></i> Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        allUser: state?.user?.allUser || []
    };
}
var LoginComp = connect(mapStateToProps)(Login);
export default LoginComp;