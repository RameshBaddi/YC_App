import React from 'react'
import UpVoteIcon from './UpVoteIcon'

export default function List() {
    return (
        <section className='border-bottom'>
            <div className='row pt-3 pb-3'>
                <div className='col text-left'>
                    
                </div>
                <div className='col-1'>
                    <UpVoteIcon />
                </div>
                <div className='col-1'>
                    Comments
                </div>
                <div className='col-2'>
                    Vote Count
                </div>
            </div>
        </section>
    )
}
