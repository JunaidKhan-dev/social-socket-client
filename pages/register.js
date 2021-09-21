import React, { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Modal } from "antd"
import Link from "next/link"

import styles from "../stylesPages/register.module.scss"
import AuthForm from "../components/Forms/AuthForm"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [secret, setSecret] = useState("")
  const [ok, setOk] = useState(false)
  const [loading, setLoading] = useState(false)

  const notify = (error) => toast.error(error)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const headers = {
      "Content-Type": "application/json",
    }

    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth/register`,
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

      setName("")
      setEmail("")
      setSecret("")
      setPassword("")
      setOk(data.ok)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      notify(error.response.data)
      console.log("Error on register user", error.response.data)
    }
  }
  return (
    <div className="container-fluid">
      <div className={`row py-1 bg-secondary ${styles.bgImage} text-light`}>
        <div className="col text-center">
          <h1>Register </h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="successfully register"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully Register - Welcome To Social Socket</p>
            <Link href="/login">
              <a className="btn btn-info btn-sm text-white"> Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Register
