import React, { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"
import Link from "next/link"

import AuthForm from "../components/Forms/AuthForm"
import PageIntro from "../components/PageIntro"

import styles from "../stylesPages/register.module.scss"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const notify = (error) => toast.error(error)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const headers = {
      "Content-Type": "application/json",
    }

    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: headers,
        }
      )

      router.push("/")
    } catch (error) {
      setLoading(false)
      notify(error.response.data)
      console.log("Error on register user", error.response.data)
    }
  }
  return (
    <div className="container-fluid">
      <PageIntro bgClass={styles.bgImage} title="Login" />
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
            btnTitle="Login"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="text-center">
            Not yet Register? -{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
