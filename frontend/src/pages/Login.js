import React from 'react';

import LoginForm from '../components/LoginForm'

const Login = (props) => (
  <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
          <h2 className="mt-5">Sistema Matriz Curricular</h2>
          <LoginForm {...props} />
        </div>
      </div>
    </div>
)

export default Login