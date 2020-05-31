import React, { useEffect, useContext, useCallback } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import './style.css'

const Loading = () => {
    
    const { fetchingStatus } = useContext(AppContext)
    
    const renderLoading = useCallback(() => {
        return fetchingStatus 
            ? <span className='statusBar bg-success text-white p-3 rounded'>Fetching new stories...</span>
            : <></>
    }, [fetchingStatus])
    
    useEffect( ()=> {
        renderLoading()
    }, [fetchingStatus, renderLoading])

    return (
        renderLoading()
    )
}

export default Loading