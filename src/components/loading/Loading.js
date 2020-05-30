import React, { useEffect, useContext, useCallback } from 'react'
import { ListContext } from '../../AppContext/ListContext'
import './style.css'

const Loading = () => {
    
    const { fetchingData } = useContext(ListContext)
    
    const renderLoading = useCallback(() => {
        return fetchingData 
            ? <span className='statusBar bg-success text-white p-3 rounded'>Fetching new stories...</span>
            : <></>
    }, [fetchingData])
    
    useEffect( ()=> {
        renderLoading()
    }, [fetchingData, renderLoading])

    return (
        renderLoading()
    )
}

export default Loading