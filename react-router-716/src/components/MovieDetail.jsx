import React from 'react'
import fetchJsonp from "fetch-jsonp";


import {Button, Icon} from 'antd'

export default class MovieDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            info: {}
        }
    }

    componentWillMount() {
        fetchJsonp('http://api.douban.com/v2/movie/subject/30282387?apikey=0df993c66c0c636e29ecbb5344252a4a').then(respons => respons.json())
            .then(data => {
                console.log(data)
                this.setState({
                    info: data
                })
            })
    }

    goBack = () => {
        this.props.history.go(-1)
    }

    render() {
        return <div>

            <Button type="primary" onClick={this.goBack}>
                <Icon type="left"/>
                返回上一层
            </Button>
            <h1>电影详情 -----{this.state.info.title}</h1>
        </div>
    }
}