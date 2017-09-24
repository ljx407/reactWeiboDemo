import React,{Component} from 'react'
import styles from '../css/commentStyle.css';

export default class CommentRelyList extends Component {

	constructor(props) {
		super(props);
		this.state = {
	        // 回复列表
	    	data:this.props.data
	    }
	} 

	render() {
		let data = this.state.data ;

		return (
			<div className={styles.commentListStyle}>
				<img src={require('../image/avtova.jpg')} className={styles.img} />
				<div className={styles.commentContentStyle}>
					<div className={styles.nickNameStyle}> 
						<span >{data.name}</span>
						<span >{data.content}</span>						
					</div>
					<span className={styles.timeSize}>{data.sendTime}</span>
				</div>	
			</div>
              
		);
	}
}