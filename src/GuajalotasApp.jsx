import React from 'react'
import { Header } from './Components/GuajalotasGeneral/Header'
import AppRouter from './Routers/AppRouter'
import Search from './Components/GuajalotasGeneral/Search'


export const GuajalotasApp = () => {

    return (
        <div>
            <Header />
            <Search />
            <AppRouter />

        </div>
    )
}


