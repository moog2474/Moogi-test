import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { PrivateComponent } from '@/components/PrivateComponent'


export const List = () => {
    const router = useRouter();

    const {loggedIn}: {loggedIn: boolean} = useAuth();

    useEffect(()=>{
        if(!loggedIn){
            router.push("/login")
        }
    }, [loggedIn]);
  return (
    loggedIn ? <PrivateComponent /> : null
  )
}
