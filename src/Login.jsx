import React,{useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Login() {

  const [user,setUser] = useState({
  
    email:"",
    password:"",

  })

  const handelChange = (e)=>{
    const {name, value} = e.target

    setUser({
      ...user,
      [name]:value
    })
  }

  const login = () => {
    console.log("User:", user);  // Log the user object
    axios.post("/api/login", user)
        .then(res => alert(res.data.message))
        .catch(error => console.error("Error:", error));
};
  return (
    <section className="vh-100 " style={{color: "#d3d3d3"}}>
      {console.log(user)}
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 text-black">
            <form>
              {/* Email input */}
              <div className="form-outline mb-4 ">
                <input
                  type="email"
                  name="email" value={user.email} onChange={handelChange}
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password" value={user.password} onChange={handelChange}
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              {/* Submit button */}
              <div className="position-relative p-sm-2">
                <NavLink
                  type="button"
                  to="/dashboard"
                  onClick={login}
                  className="position-absolute start-0 btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </NavLink>
                <NavLink
                  type="button"
                  to="/register"
                  className="position-absolute end-0 btn btn-outline-secondary btn-lg btn-block "
                >
                  Sign up
                </NavLink>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login