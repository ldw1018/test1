import React from 'react'

//导入fetchjson
import fetchJsonp from 'fetch-jsonp'
import {Spin, Alert, Pagination} from 'antd';

import MovieItem from '@/components/MovieItem'

export default class MovieList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            movies: [],
            //从路由取出动态路由参数
            type: props.match.params.type,  //查询的类型
            nowPage: parseInt(props.match.params.page) || 1, //当前页  注意类型转换
            pageSize: 10,  //每页显示记录数
            isLoading: true,
            total: 0
        }
    }


    componentWillReceiveProps(nextProps) {
        //console.log(nextProps)
        //点击切换路由
        //
        this.setState({
            type: nextProps.match.params.type,
            nowPage: parseInt(nextProps.match.params.page),
            isLoading: true,
            total: 0
        }, () => {
            //重新发送请求
            this.loadDataByTypeAndPage()
        })
    }

    //加载数据
    componentWillMount() {
        //console.log('componentWillMount====')
        this.loadDataByTypeAndPage();
    }


    loadDataByTypeAndPage() {
        const start = (this.state.nowPage - 1) * this.state.pageSize;
        const url = `http://api.douban.com/v2/movie/${this.state.type}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`

        //fetch 是es6新语法
        //由于不同源,跨域  ---需要一个fetch的第三方中间,帮助发送jsonp请求
        /*   fetch(url).then(respons => respons.json())
               .then(data => {
                   console.log(data)
               })*/

        fetchJsonp(url).then(respons => respons.json())
            .then(data => {
                console.log(data)
                //设置数据
                this.setState({
                    movies: data.subjects,
                    total: data.total,
                    isLoading: false
                })
            })
    }


    //点击页码触发的函数
    pageChage = (page, pageSize) => {
      //  console.log(page)
      //  console.log(this.props)
        /* this.setState({
             nowPage: parseInt(page),
             isLoading: true
         }, () => {
             this.loadDataByTypeAndPage();
         })*/

        //只需要修改地址栏的地址
        //window.location.href = '/#/movie/' + this.state.type + '/' + page;

        this.props.history.push('/movie/' + this.state.type + '/' + page);
    }

    showLoading = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        } else {
            /* 电影列表的循环 */
            return <div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.state.movies.map(item => <MovieItem history={this.props.history}  key={item.id} {...item}/>)}
                </div>
                <Pagination defaultCurrent={this.state.nowPage} total={this.state.total}
                            pageSize={this.state.pageSize} onChange={this.pageChage}/>
            </div>
        }
    }


    render() {
        return <div>
            {this.showLoading()}
        </div>
    }
}