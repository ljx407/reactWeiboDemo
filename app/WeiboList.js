import React,{Component} from 'react'
import WeiboListItem from './WeiboListItem.js'
import styles from '../css/ListStyle.css'

export default class WeiboList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let datas = this.props.data ;
		let dataList = datas.data.map(function(item,index){
			return (
				<WeiboListItem key={index} itemData={item}/>
			);
		})

		return (
			<div className = {styles.listRootViewStyle}>
				{dataList}
			</div>
		);
	} 
}
