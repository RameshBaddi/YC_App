import React, { createContext, Component } from 'react'
import {fetchApi} from './fetchApi'

export const ListContext = createContext()

class ListContextProvider extends Component {

    constructor(props){
        super(props)

        this.state = {
            fetchingData: false,
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

    generateChartData = async () => {
        let chartData = await this.state.listData.map((ls, i) => {
            return {
                title: ls.title,
                id: ls.objectID,
                name: ls.title,
                votes: ls.points,
                comments: ls.num_comments ? ls.num_comments : 0
            }
        })

        this.setState({
            chartData
        })
    }
    
    fetchListData = async (page=0) => {
        this.setState({fetchingData: true})
        let data = await fetchApi(page)

        if(data.hits) {
            this.setState({
                listData: data.hits,
                page
            })
        } 
        
        this.generateChartData()
        this.hideStatusBar()
    }

    handleHide = (id) => {
        this.setState({
            hiddenList: [...this.state.hiddenList, id]
        })
    }

    hideStatusBar = () => {
        setTimeout(() => {
            this.setState({
                fetchingData: false
            })
        },2000)   
    }

    upVote = async (id, idx) => {
        await this.setState(prevState => ({
            ...prevState,
            listData: prevState.listData.map((el, i) => {
                if(i === idx) {
                    return {
                        ...prevState.listData[idx],
                        points : prevState.listData[idx].points + 1
                    }
                } else {
                    return el
                }
            })
        }))
        this.generateChartData()
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
