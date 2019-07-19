import React from 'react'

//引入anti的组件
import {Layout, Menu} from 'antd';

const {Sider, Content} = Layout;

import {Route, Link, Switch} from 'react-router-dom'

import MovieList from '@/components/MovieList'
import MovieDetail from '@/components/MovieDetail'

export default class Movie extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentWillMount() {
        //console.log(this.props.match.params.cid)
       // console.log(this.props.match.params.type)

    }

    render() {
        return <Layout style={{height: '100%'}}>
            {/* 侧边栏内容*/}
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                    style={{height: '100%', borderRight: '1px solid silver'}}
                >
                    <Menu.Item key="in_theaters"> <Link to='/movie/in_theaters/1'>正在热映</Link> </Menu.Item>
                    <Menu.Item key="coming_soon"> <Link to='/movie/coming_soon/1'>即将上映</Link> </Menu.Item>
                    <Menu.Item key="top250"> <Link to='/movie/top250/1'>Top250</Link> </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 5px 5px', height: '100%', background: '#fff'}}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 6,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {/*  取出动态路由上的参数*/}
                    {/*  /movie/subject/30282387*/}
                    {/*  满足一个路由之后就不再继续匹配了 */}
                    <Switch>
                        {/*电影详情*/}
                        <Route path='/movie/subject/:id' exact component={MovieDetail}/>
                        <Route path='/movie/:type/:page' exact component={MovieList}/>

                    </Switch>

                </Content>
            </Layout>
        </Layout>

    }
}