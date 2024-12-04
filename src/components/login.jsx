import React from "react";
import './login.css';
import { Link } from "react-router-dom";

function LoginForm() {

    return (
        <div className="page">
            <div className="form">
                <div>
                    <h1>Please Sign in</h1>
                </div>
                <div className="form-fl mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email address" />
                </div>
                <div className="form-fl">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                </div>
                <div className=" check form-control-sm">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label ">Remember it</label>
                </div>
                <div className="Buttons">
                    <div className="d-grid gap-2">
                        <button className="btn btn-success mt-3" type="button">Log in</button>
                        <Link to='newjob' className="btn btn-primary mt-2" type="button">Apply for Job/ position</Link>
                        <button className="btn btn-secondary mt-2" type="button">New Company</button>
                    </div>
                </div>
            </div >
        </div>
    );
};
export default LoginForm