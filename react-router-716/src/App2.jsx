import React from 'react'

//引入路由相关组件
import {HashRouter, Route, Link} from 'react-router-dom'

//引入组件
import About from '@/components/About'
import Home from '@/components/Home'
import Movie from '@/components/Movie'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        /*1.用hashrouter 包裹所有的内容*/
        return <HashRouter>
            <div>
                <h5><Link to='/home'>首页</Link></h5>
                <h5><Link to='/movie/top250/1'>电影</Link></h5>
                <h5><Link to='/about'>关于我们</Link></h5>
            </div>

            {/* 默认是模糊匹配 ,如果需要精确匹配,加入额外属性 exact*/}
            <Route path='/home' component={Home}></Route>
            <Route path='/movie/:type/:cid' exact component={Movie}></Route>
            <Route path='/about' component={About}></Route>
        </HashRouter>
    }
}