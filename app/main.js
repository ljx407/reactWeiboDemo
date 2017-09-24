import React from 'react'
import ReactDOM from 'react-dom'
import WeiboList from './WeiboList.js'
import datas from '../data/datas.json'

ReactDOM.render( 
	<WeiboList data={datas}/>,
    document.getElementById('container')
);