import React from 'react'
import { Link } from 'react-router-dom'

function Myloginpage() {
  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-md-4 bg-light p-4 shadow">
          <div className='container-fluid'>
          <div className='row'>
              <div className='col-12 p-3 text-center'>
                <img src="photo/img1.jpg" width={80} height="80" alt='mylogo' className='rounded-circle'></img>
                <h2 className='mt-3'>Login User</h2>
              </div>
            </div>
            <div className="row">
              <section className='col-12'>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" />
                </div>
              </section>
              <section className='col-12'>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" />
                </div>
              </section>
            </div>
            <div className='row'>
              <section className='col-md-6'>
                <input type='checkbox' />
                <span className='ms-1'>Remember Me</span>
              </section>
              <section className='col-md-6 text-end'>
                <span><Link to='#'>Forget password</Link></span>
              </section>
            </div>
            <div className='row'>
              <div className='col-12 p-3 text-center'>
                <button className='btn btn-success'>login</button>
                <button className='btn btn-danger ms-3'>cancel</button>
                <Link to="registor" className='btn btn-primary ms-3'>New Registor</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myloginpage