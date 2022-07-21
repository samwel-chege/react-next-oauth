import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../styles/Home.module.css'

const account = () => {
    const {data: session, status} = useSession({required: true});

    if (status === 'authenticated') {
        return (
            <div className={styles.container}>
                <p>Welcome {session.user.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }else {
        return (
            <div>
                <p>You are not signed in</p>
                <button onClick={() => signIn()}></button>
            </div>
          )

    }
 
}

export default account