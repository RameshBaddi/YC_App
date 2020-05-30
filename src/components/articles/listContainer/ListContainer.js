import React from 'react'
import List from './List'

const ListContainer = () => {
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
        </article>
    )
}

export default ListContainer
