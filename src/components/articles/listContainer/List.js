import React, { useContext, useEffect, useCallback } from 'react'
import UpVoteIcon from './UpVoteIcon'
import { AppContext } from '../../../AppContext/AppContext'

const List = () => {
    const {listData, handleHide, hiddenList, upVote} = useContext(AppContext)

    const handleVote = useCallback((e, objectID, i) =>{
        e.stopPropagation()
        upVote(objectID, i)
    },[upVote]) 

    const renderList = useCallback(() => {
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
                            <i  onClick={(e) => handleVote(e, topic.objectID, i)}><UpVoteIcon /></i>
                        </div>
                        <div className='col-1'>
                            {topic.num_comments ? topic.num_comments : 0}
                        </div>
                        <div className='col-2'>
                            {topic.points > 0 ? topic.points : 0}
                        </div>
                    </div>
                </section>
            } else {
                return null
            }
            
        })
        return listEl
    }, [listData, handleHide, hiddenList, handleVote]) 

    useEffect(() => {
        renderList()
    }, [hiddenList, renderList])

    return (
        <>
            {listData && listData.length 
                ? renderList()
                : <p className='text-center p-4'>No topics found</p>
            }
        </>
    )
}

export default List