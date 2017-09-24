import React, {Component} from 'react'
import styles from '../css/ListItemStyle.css'
import CommentForm from './CommentForm.js'

export default class WeiboListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isComment : false,
			zanShu : props.itemData.NoPointGreat
		}

	}

	render() {
		let item = this.props.itemData;
		return (
			<div>
				{this._headViewRender(item)}
				<hr className={styles.hrStyle} />
				{this._footerViewRender(item)}
				{this.state.isComment ? <CommentForm /> : null}
			</div>
		);
	}

	_dianzan() {
		this.setState({
			isComment : false,
			zanShu : parseInt(this.state.zanShu) + 1
		})
	}

	_pinglun() {
		this.setState({
			isComment : true
		})
	}

	_zhuanfa() {
		this.setState({
			isComment : false
		})
	}

	_headViewRender(item) {
		return (
			<div className={styles.item}>
				<img src={require("../image/tiger.jpg")} className={styles.imgStyle}></img>
				<div className={styles.topRightView}>
					<div className={styles.nickNameAndSendTime}>
						<span>{item.nickName}</span>
						<span>{item.sendTime}</span>
					</div>
					<p>{item.content}</p>
				</div>
			</div>
		);
	}

	_footerViewRender(item) {
		return (
			<div className={styles.commentViewStyle}>
				<ul className={styles.ulStyle}>
					<li className={styles.liStyle} onClick={this._dianzan.bind(this)}>点赞:{this.state.zanShu}</li><div className={styles.shuxian}></div>
					<li className={styles.liStyle} onClick={this._pinglun.bind(this)}>评论:{item.NoComment}</li><div className={styles.shuxian}></div>
					<li className={styles.liStyle} onClick={this._zhuanfa.bind(this)}>转发:{item.NoForward}</li>
				</ul>
			</div>
		);
	}
}