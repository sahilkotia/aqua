import React from "react"
import './newjob.css';
function Job() {

    return (
        <div className="whole">
            <div className="sentence">
                <h1>Registration Form</h1>
                <div className="jobform">
                    <label for="select-list" class='form-label'>Confirm list</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="firstname" class="form-label mt-3">First name</label>
                    <input type="text" class="form-control" id="fname" required></input>
                    <label for="lastname" class="form-label mt-3">Last name</label>
                    <input type="text" class="form-control" id="lname" required></input>
                    <label for="Email" class="form-label mt-3">Email</label>
                    <input type="email" class="form-control" id="Email"></input>
                    <label for="password" class="form-label mt-3">Password</label>
                    <input type="password" class="form-control" id="passwrd"></input>
                    <label for="password" class="form-label mt-3">Confirm Password</label>
                    <input type="password" class="form-control" id="passwrd"></input>
                    <label for="dob" class="form-label mt-3">Date of Birth:</label>
                    <input type="date" class="form-control" id="dob" />
                    <label for="address" class="form-label mt-3">Address</label>
                    <textarea class="form-control" id="adrs" rows="3"></textarea>
                    <label for="state" class="form-label mt-3">State</label>
                    <input type="text" class="form-control" id="state"></input>
                    <label for="city" class="form-label mt-3">City</label>
                    <input type="text" class="form-control" id="city"></input>
                    <div class="input-group mb-3 mt-3">
                        <input type="file" class="form-control" id="File"/>
                            <label class="input-group-text" for="inputGroupFile02">Upload Image</label>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    )
};
export default Job;