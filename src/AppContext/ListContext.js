import React, { createContext, useState, Component } from 'react'

export const ListContext = createContext()

class ListContextProvider extends Component {

    constructor(props){
        super(props)

        this.state = {
            listData: [],
            page: 0,
            chartData: [],
            resData: [],
            hiddenList: []
        }
    }

    componentDidMount(){
        this.fetchListData()
    }
    
    fetchListData = async (page=0) => {
        const url = `https://hn.algolia.com/api/v1/search?page=${page}&hitsPerPage=10`
        let data = []
        try {
            let res = await fetch(url)
            data = await res.json()
            this.setState({
                listData: data.hits,
                page,
            })
        } catch(err) {
            console.log(err)
        }
    }

    handleHide = (id) => {
        this.setState({
            hiddenList: [...this.state.hiddenList, id]
        })
    }

    render(){
        const { children } = this.props
        return (
            <ListContext.Provider value={{...this, ...this.state}}>
                {children}
            </ListContext.Provider>
        )
    }
}

export default ListContextProvider
