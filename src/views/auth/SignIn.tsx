import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import LargeDropdown from "components/largeDropdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "services/authService";
import { TailSpin } from 'react-loader-spinner'
import Toast from "components/toast";
import { useAuth } from "utils/AuthContext";

// import { loginUser } from "features/auth/authAction";

export default function SignIn() {

  const { loginUser, user } = useAuth();

  const roles = ['Admin', 'Teacher', 'Student']
  const navigate = useNavigate()
  const [role, setRole] = useState<String>('--Select-role--')
  const [userName, setUsername] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validation, setValidation] = useState({
    state: '',
    errorMessage: ''
  })

  const [toast, setToast] = useState({
    show: false,
    type: '',
    message: ''
  })


  const handleLogin = async () => {
    if (role === '--Select-role--' && !userName && !password) {
      setValidation({ state: 'error', errorMessage: `*Fields can't be empty` })
      return
    }
    if (!userName) {
      setValidation({ state: 'error', errorMessage: `*Fields can't be empty` })
    }
    setIsLoading(true)
    // if(!userName) setValidation({state: 'error', errorMessage: `*Username can't be empty`})
    // else if(!password) setValidation({state: 'error', errorMessage: `*Password can't be empty`})
    loginUser({userName, role: role.toLowerCase(), password})

  }
  useEffect(() => {
    if (user) {
      navigate('/admin')
    }
  }, [])

  return (
    <>
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
      />
      {/* <ToastContainer hideProgressBar={true} /> */}
      <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          <LargeDropdown
            label="I am *"
            extra="mb-3"
            dropdownData={roles}
            selected={role}
            setSelected={setRole}
            id="role"
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            setInput={setUsername}
            inputValue={userName}
            state={validation.state}
            message={validation.errorMessage}

          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            setInput={setPassword}
            state={validation.state}
            message={validation.errorMessage}
          />
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-[#007bff] hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <button className="linear mt-2 w-full rounded-xl bg-[#007bff] py-[12px] text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 flex justify-center gap-5 items-center"
            onClick={handleLogin}>
            <TailSpin
              height="20"
              width="20"
              color="#ffff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={isLoading}
            /> Sign In
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <a
              href=" "
              className="ml-1 text-sm font-medium text-[#007bff] hover:text-brand-600 dark:text-white"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
