//入口文件
import React from 'react'
import ReactDom from 'react-dom'

// import 'antd/dist/antd.css';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom'
import App from '@/App'

ReactDom.render(
    <div style={{height: '100%'}}>
        <HashRouter>
            <Route path='/' component={App} />
        </HashRouter>
    </div>
    , document.getElementById("app"))


