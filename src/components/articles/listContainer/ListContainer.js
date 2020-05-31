import React, { useContext } from 'react'
import List from './List'

import {AppContext} from '../../../AppContext/AppContext'

const ListContainer = () => {

    const {fetchListData, page} = useContext(AppContext)

    return (
        <article className='container-fluid pt-3'>
            <section className='container bg-info text-white p-2 rounded'>
                <div className='row'>
                    <div className='col text-left'>
                        News Details
                    </div>
                    <div className='col-1'>
                        Up Vote
                    </div>
                    <div className='col-1'>
                        Comments
                    </div>
                    <div className='col-2'>
                        Vote Count
                    </div>
                </div>
            </section>

            <List />
            
            <section className='container p-2 mt-2'>
                <div className='row'>
                    <div className='col text-left'>
                        <small><span className=''>Active page - <b>{page + 1}</b></span></small>
                    </div>
                    <div className='col text-right'>
                        <button className='btn btn-secondary mr-2' onClick={() => fetchListData(page - 1)} disabled={page === 0}>Prev</button>
                        <button className='btn btn-secondary' onClick={() => fetchListData(page + 1)}>Next</button>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default ListContainer
