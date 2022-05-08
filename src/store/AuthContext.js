import { createContext, useState } from 'react'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    return (
        <AuthContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext