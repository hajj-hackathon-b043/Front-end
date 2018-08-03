import React, { Component } from 'react';
import './screens.css';
import { FaArrowLeft } from 'react-icons/fa';
import TextFields from './textarea';
import { FaArrowRight } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Notificationpage extends Component {
	state = {
    textNoti: '',
    notifications: []
	}

	submitText = (e) => {
		const { textNoti } = this.state;

		if (textNoti) {
			this.props.history.push('/Profile');
		}
  }
  fetchNotifications = () => {
    const group = 'b-45';
    const url = `https://desolate-caverns-43961.herokuapp.com/notifications/${group}`;
    axios.get(url).then(res => {
      this.setState({ notifications: res.data });
    });
  }
  componentDidMount() {
    this.fetchNotifications();
  }
  render() {
    return (
      <div className="Body">
        <div className="topnotilist">
          <div className="navnoti">
            <Button
              size="small"
              style={{
                backgroundColor: 'transparent',
                display: 'flex',
                top: '2px',
                justifyContent: 'flex-start'
              }}>
              <FaArrowLeft onClick={() => this.props.history.push('/Profile')} className="notiarrow" />
            </Button>
            <div className="navtextnoti">إعلام</div>
          </div>
        </div>
        <div className="NotificationList-wrapper">
          <div className="NotificationList">
            {this.state.notifications.map((notification, i) => {
              return <div key={i} className="bubble">{notification.message}</div>
            })}
          </div>
        </div>
        {/* <div className="textdiv"> */}
          {/* <form onSubmit={this.submitText}> */}
			{/* <TextFields
				value={this.state.textNoti}
				onChange={(e) => this.setState({ textNoti: e.target.value })} 
			/>
            <Button
              size="small"
              style={{
                backgroundColor: 'transparent',
                display: 'flex',
                bottom: '3.5px',
                justifyContent: 'flex-start'
              }}>
              <FaArrowRight onClick={this.submitText} className="notiarrow" />
            </Button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Notificationpage;
