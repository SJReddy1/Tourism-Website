import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import { ID, account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { get } from 'jquery';

export const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}


export const UserContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (userInfo) => {
        try {
            const req = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userInfo.email,
                    password: userInfo.password
                }),
                withCredentials: true
            }

            const result = await fetch('http://localhost:8000/login', req)
            const userResponse = await result.json()
            console.log("userResponse:", userResponse)
            if(userResponse.success === false){ 
                alert("Invalid email or password")
                return
            }
            setAuthUser(userResponse);
            
            localStorage.setItem('current-user', JSON.stringify(userResponse));
            navigate('/', {
                replace: true
            })
        } catch (error) {
            console.error(error);
        }
    }
    const logoutUser = async () => {
        const result = await fetch('http://localhost:8000/logout');
        const data = await result.json();
        if (data.success) {
            localStorage.removeItem('current-user');
            setAuthUser(null)
            navigate('/login', {
                replace: true
            })
        } else {
            console.log("logout failed")
        }
    }
    const userStatus = async () => {
        try {
            const curr_user = JSON.parse(localStorage.getItem('current-user'));
            setAuthUser(curr_user)
        }
        catch (error) {
            console.log(error)
        }
    }
    const signupUser = async (userInfo) => {
        try {
            const req = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userInfo.name,
                    email: userInfo.email,
                    password: userInfo.password
                }),
                withCredentials: true
            }

            const result = await fetch('http://localhost:8000/register', req)
            const userResponse = await result.json()
            console.log("userReposne:", userResponse)
            if(userResponse.success === false){ 
                alert("Invalid email or password")
                return
            }
            setAuthUser(userResponse);
            localStorage.setItem('current-user', JSON.stringify(userResponse));
            navigate('/', {
                replace: true
            })

        } catch (error) {
            console.error(error);
        }
    }

    const context = {
        authUser,
        loginUser,
        logoutUser,
        userStatus,
        signupUser
    }

    useEffect(() => {
        userStatus();
    }, [])
    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}