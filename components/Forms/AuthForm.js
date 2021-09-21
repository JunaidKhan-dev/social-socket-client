import React from "react"
import { SyncOutlined } from "@ant-design/icons"

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  btnTitle,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {page !== "login" && (
        <div className="form-group mb-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
      )}

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
      {page !== "login" && (
        <>
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
        </>
      )}
      {page === "register" && (
        <button
          disabled={!name || !email || !secret || !password}
          className="btn btn-info col-12 text-white"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : btnTitle}
        </button>
      )}

      {page === "login" && (
        <button
          disabled={!email || !password}
          className="btn btn-info col-12 text-white"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : btnTitle}
        </button>
      )}
    </form>
  )
}

export default AuthForm
