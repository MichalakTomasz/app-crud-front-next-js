import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({Children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userId, setUserId] = useState();
    const [token, setToken] = useState();
    const jwtToken = 'jwtToken';

    useEffect(() => {
        const storedToken = localStorage.getItem(jwtToken);
        setToken(storedToken);
        if (token)
            setIsAuthorized(true)
    }, []);

    const login = (token, userId) =>{
        if (token){
            setToken(token);
            setIsAuthorized(true);
            localStorage.setItem(jwtToken, token);

            if (userId)
                setUserId(userId);
        }
    };

    const logout = () => {
        setToken(undefined);
        localStorage.setItem(jwtToken, undefined);
        setUserId(undefined);
        setIsAuthorized(false);
    };

    return (
        <AuthContext.Provider value = {{isAuthorized, login, logout}}>
            {Children}
        </AuthContext.Provider>
    );
}

export const useAuthService = () => {
    return useContext(AuthContext);
}