import React from 'react'

import {Rate} from 'antd';
import style from '@/css/MovieItem.scss'

export default class MovieItem extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentWillMount() {

    }

    goDetail = () => {
       // console.log(this.props)
       // console.log('1111')
        //编程式导航
        //window.location.href = '/#/movie/' + this.state.type + '/' + page;
        this.props.history.push('/movie/subject/' + this.props.id)


    }


    render() {
        return <div className={style.box} onClick={this.goDetail}>
            <img className={style.img} src={this.props.images.small} alt=""/>
            <h3 className={style.title}>名称:{this.props.title}</h3>
            <h3 className={style.title}>上映:{this.props.year}年</h3>
            <p className={style.type}>电影类型:{this.props.genres.join(',')}</p>
            <Rate disabled defaultValue={this.props.rating.average / 2}/>
        </div>
    }
}