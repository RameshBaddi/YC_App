import React, { createContext, Component } from 'react'
import {fetchApi} from './fetchApi'

export const AppContext = createContext({})

class AppContextProvider extends Component {

    constructor(props){
        super(props)

        this.state = {
            fetchingStatus: false,
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
        this.setState({fetchingStatus: true})

        try{
            let data = await fetchApi(page)

            if(data.hits) {
                this.setState({
                    listData: data.hits,
                    page
                })
            } 
            
            this.generateChartData()
            this.hideStatusBar()
        } catch (err){
            console.log(err)
        }
      
    }

    handleHide = (id) => {
        this.setState({
            hiddenList: [...this.state.hiddenList, id]
        })
    }

    hideStatusBar = async () => {
        await setTimeout(() => {
            this.setState({
                fetchingStatus: false
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
            <AppContext.Provider value={{...this, ...this.state}}>
                {children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider
