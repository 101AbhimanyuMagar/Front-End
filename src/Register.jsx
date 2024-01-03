import React,{useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


function Register() {

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handelChange = (e)=>{
    const {name, value} = e.target

    setUser({
      ...user,
      [name]:value
    })
  }

  const register = async () => {
    const { name, email, password, reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword))
    {
      
      await axios.post("/api/register",user)
      .then(res =>  alert(res.data.message))
    }
    else{
      alert("invalid inpot")
    }
    
  }

  return (
    <section className="min-vh-100 " style={{ backgroundColor: '#eee' }}>
    <div className=" container min-vh-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: '25px' }}>
            <div className="card-body p-md-2">
              <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image" />
                </div>

                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                  <p className="text-center h3 fw-bold mb-3 mx-1 mx-md-2 mt-2">Sign up</p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" name="name" value={user.name} onChange={handelChange} id="form3Example1c" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" name="email" value={user.email} onChange={handelChange} id="form3Example3c" className="form-control" />
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" name="password" value={user.password} onChange={handelChange} id="form3Example4c" className="form-control" />
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handelChange} id="form3Example4cd" className="form-control" />
                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-2">
                      <NavLink to="/" type="button" onClick={register} className="btn btn-primary btn-lg">Register</NavLink>
                    </div>
                  </form>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register