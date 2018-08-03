import React, { Component } from 'react';
import { connect } from 'react-redux';
import './screens.css';
import QrReader from 'react-qr-reader';
import { FaQrcode } from 'react-icons/fa';
import { FaHandPointer } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

class QRscan extends Component {
  timer = null;

  state = {
	completed: 0,
	showCamera: false,
	showError: null,
	scanSuccess: false
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  openQRscan = () => {
    this.setState({
			showCamera: true
		});
	setTimeout(() => {
		this.setState({ showCamera: false });
	}, 1000 * 30)
  }

  handleScanError = (error) => {
	this.setState({
		showError: error
	  });
	  console.log('failed')
  }

  handleScanSuccess= (data) => {
	if(data) {
		this.setState({
			showCamera: false,
			scanSuccess: true
		});
		const group = 'b-45';
		const url = `https://desolate-caverns-43961.herokuapp.com/user/${data}`;
		console.log(url)
		axios.get(url).then(res => {
			console.log(res);

			this.props.dispatch({
				type: 'SCAN_DATA_SUCCESS',
				data: res.data
			});
			localStorage.setItem('lang', res.data.lang || 'en');
			this.props.history.push('/Profile');
		})
		.catch(err => {
			console.log(err);
		})
	}
  }

  render() {
	  const { showCamera, showError, scanSuccess } = this.state;
	  
    return (
      <div className="Body">
        <div className="container">
          <p className="text">قم بالمسح</p>

			{ !showCamera ? (
			<div onClick={this.openQRscan} className="body">
				<FaQrcode className="icon" />
				<FaHandPointer className="hand" />
			</div>
			) : (
			<div className="qrScanner">
				<QrReader 
					onError={this.handleScanError} 
					onScan={this.handleScanSuccess}
					className="Camera"
				/>
			</div>
			)}

          <div className="progress">
			{ showCamera && 
            	<CircularProgress className="loading" variant="determinate" color="inherit" value={this.state.completed} />
			}
			{ showError && 
            	<p className="ERROR">حدث خطاء {showError}</p>
			}
			{ scanSuccess && 
            	<p className="GREEN">User Found. Processing Data...</p>
			}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(QRscan);
