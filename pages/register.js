import React, { useState } from "react"
import axios from "axios"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [secret, setSecret] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const headers = {
      "Content-Type": "application/json",
    }

    console.log({ name, email, password, secret })
    try {
      await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          name,
          email,
          password,
          secret,
        },
        {
          headers: headers,
        }
      )

      console.log("success register")
    } catch (error) {
      console.log("Error on register user", error)
    }
  }
  return (
    <div className="container-fluid">
      <div className="row py-1 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register </h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group mb-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div className="form-group mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group mb-3">
              <label className="text-muted d-block mb-1">Pick a question</label>
              <select>
                <option value="">What is your favorite color?</option>
                <option value="">What is your best friend name?</option>
                <option value="">What city your were born?</option>
              </select>
              <small className="form-text text-muted px-2">
                you can use this to reset your password if forgotten
              </small>
            </div>

            <div className="form-group mb-5">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write answer here"
              />
            </div>
            <button className="btn btn-info col-12">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
