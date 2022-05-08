import { createContext, useState } from 'react'

const UserDataContext = createContext()

export function UserDataProvider({children}) {
    const [clients, setClients] = useState([])
    const [projects, setProjects] = useState([])
    const [jobs, setJobs] = useState([])
    

    return(
        <UserDataContext.Provider value={{

        }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext