import React, { useContext, useEffect } from 'react'
import UpVoteIcon from './UpVoteIcon'
import { ListContext } from '../../../AppContext/ListContext'

const List = () => {
    const {listData, handleHide, hiddenList} = useContext(ListContext)

    const renderList = () => {
        let listEl = listData.map((topic, i) => {

            if(!hiddenList.includes(topic.objectID)) {

                return <section key={i} className='border-bottom'>
                    <div className='row pt-3 pb-3 pl-2 pr-2'>
                        <div className='col text-left'>
                            <p className='mb-1'>{topic.title ? topic.title  : <span className='text-secondary'>Title unavailable</span>}
                                <span className='btn btn-link' onClick={() => handleHide(topic.objectID)}>
                                    <small>[ Hide ]</small>
                                </span>
                            </p>
                        </div>
                        <div className='col-1'>
                            <UpVoteIcon />
                        </div>
                        <div className='col-1'>
                            {topic.num_comments ? topic.num_comments : 0}
                        </div>
                        <div className='col-2'>
                            {topic.points > 0 ? topic.points : 0}
                        </div>
                    </div>
                </section>
            }
        })

        return listEl
    }

    useEffect(() => {
        renderList()
    }, [hiddenList])

    return (
        <>
            {listData.length 
                ? renderList()
                : <p className='text-center'>No topics found</p>
            }
        </>
    )
}

export default List