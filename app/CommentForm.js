import React,{Component} from 'react'
import CommentRelyList from './CommentRelyList.js'
import styles from '../css/commentStyle.css'

export default class CommentForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			commentRelyList : []
		}

	}

	// 获取当前时间并格式化输出“yyyy-MM-dd HH:mm:ss”
	_getCurrentFormatDate() {
		let date = new Date();
		let month = date.getMonth();
		let day = date.getDay();

		let seporateDate = "-" ;
		let seportatTime = ":" ;

		if(month >= 1 && month <= 9 ) {
			month = "0" + month ;
		}

		if(day >=1 && day <= 9) {
			day = "0" + day ;
		}

		let currentDate = date.getFullYear() + seporateDate + month + seporateDate + day + " " + date.getHours() + seportatTime + date.getMinutes() + seportatTime + date.getSeconds();

		return currentDate ;
	}

	_comment() {
		console.info("comment");
		let comment = this.refs.comment.value;
		if(comment == '') {
			alert("评论内容不能为空");
			return
		}
		let currentDate = this._getCurrentFormatDate()
		let relyContent = {
			name : "ljx",
			sendTime : currentDate,
			content : comment
		}

		let oldCommentRelyList = this.state.commentRelyList ;
		let newCommentRelyList = oldCommentRelyList.concat(relyContent);

		this.setState({
			commentRelyList : newCommentRelyList
		})

		// 清空评论
		this.refs.comment.value = ''
	}

	render() {
		let commentRelyListData = this.state.commentRelyList.map(function(data,index){
			return (
				<CommentRelyList key={index} data={data} />
			);
		});

		return (
			<div className={styles.rootView}>
            	<div className={styles.headView}>
            		<img src={require('../image/qiche.jpg')} className={styles.img} />
					<div className={styles.textareaViewStyle}>
						<textarea rows="4" cols="4" ref="comment"></textarea>
						<button className={styles.commentBtnStyle} onClick={this._comment.bind(this)}>评论</button>	
					</div>
				</div>
				{commentRelyListData}
			</div>
		);
	}
}