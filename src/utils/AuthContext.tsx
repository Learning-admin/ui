import axios from "axios";
import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const userData = JSON.parse(localStorage.getItem('currentUser'))
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any>(userData || null);
    const baseURL = 'https://dev.examprephub.com/api/smartAct/'

    const navigate = useNavigate()

    useEffect(() => {
        checkUserStatus()
        localStorage.setItem('currentUser', JSON.stringify(user))
        console.log(user)
    }, [user]);

    const loginUser = async (userInfo: any) => {
        setLoading(true)
        try {
            const res = await axios.post(`${baseURL}${'auth/signin'}`, userInfo, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setUser(res.data)
            console.log(res)
            // localStorage.setItem('currentUser', JSON.stringify(res.data))
            // localStorage.setItem('accessToken', res.data.accessToken)
        } catch (error: any) {
            console.log(error?.message)
        }
        setLoading(false)
    };

    const logoutUser = async () => {
        navigate('/sign-in')
        localStorage.clear()
        setUser(null)
    };

    const registerUser = async (userInfo: any) => { };

    const checkUserStatus = async () => {
        // try{
        //     let accountDetails = await account.get()
        //     setUser(accountDetails)
        // }catch(err){
        //     console.log(err)
        // }
        // setLoading(false);
    };

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
