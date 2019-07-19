import React from 'react'

//引入路由相关组件
import {HashRouter, Route, Link, Redirect, Switch} from 'react-router-dom'

//引入anti的组件
import {Layout, Menu, Icon} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

//引入自己的组件
import Home from '@/components/Home'
import About from '@/components/About'
import Movie from '@/components/Movie'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: window.location
        }
    }


    componentWillMount() {
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    componentWillUpdate(nextState) {
        console.log('test')
        console.log(nextState.location);


    }

    render() {
        /*1.用hashrouter 包裹所有的内容*/
        return (
            <Layout style={{height: '100%'}}>
                {/* 头部内容 */}
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1] || 'movie']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="home"><Link to='/home'>首页</Link> </Menu.Item>
                        <Menu.Item key="movie"><Link to='/movie/in_theaters/1'>电影</Link></Menu.Item>
                        <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
                    </Menu>
                </Header>

                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/movie' component={Movie}/>
                        <Redirect to='/movie/in_theaters/1' from='/'/>
                    </Switch>
                </Content>

                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        )

    }
}