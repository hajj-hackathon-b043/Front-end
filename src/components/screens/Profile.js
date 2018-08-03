import React, { Component } from 'react';
import { connect } from 'react-redux';
import './screens.css';
import { FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import translate from '../../I18N/I8';
//modal imported..
import SimpleModalWrapped from './modal';

import { FaMap } from 'react-icons/fa';

// import flag from './img/ksa.png';
// import flag from './img/bangladesh.png';

let flag = 'https://www.countryflags.io/be/flat/64.png ';

const locale = {
  profileMedical: {
    en: 'Medical Center',
    ar: '',
    bn: 'হাসপাতাল'
  },
  profileCamp: {
    en: 'Camp',
    ar: '',
    bn: 'তাঁবু'
  },
  profileWC: {
    en: 'W.C',
    ar: '',
    bn: 'টয়লেট'
  },
  profileFood: {
    en: 'Food',
    ar: '',
    bn: 'খাবার'
  },
  profileLoc: {
    en: 'camp leader live',
    ar: '',
    bn: 'জীবিত'
  }
};

class Profile extends Component {
  render() {
    const { id, name, country, lang } = this.props.profile;
    const flagUrl = `./img/${lang}.png`;

    return (
      <div className="Body">
        <div
          className="top"
          style={{
            background: 'url(' + flagUrl + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
          <div className="layer">
            <div className="nav">
              <Button
                size="small"
                style={{
                  backgroundColor: 'transparent',
                  display: 'flex',
                  top: '2px',
                  justifyContent: 'flex-start'
                }}>
                <FaArrowLeft onClick={() => this.props.history.push('/')} className="bell" />
              </Button>
              <p className="top-text">Name: {name}</p>
              <p className="Id">ID: {id}</p>
              <p className="top-text">Nationality: {country}</p>
            </div>
            <Button
              size="small"
              style={{
                backgroundColor: 'transparent',
                position: 'relative',
                height: '22px'
              }}>
              <FaBell onClick={() => this.props.history.push('/Notificationpage')} className="bell" />
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="containbox">
            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaBriefcaseMedical className="Icons-select" />
                <p className="white"> {translate(locale, 'profileMedical')}</p>

                <p className="white">مركز صحي</p>
              </Button>
            </div>
            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaWarehouse className="Icons-select" />
                <p className="white"> {translate(locale, 'profileCamp')}</p>

                <p className="white">السكن</p>
              </Button>
            </div>

            <div className="box">
              <Button
                variant="contained"
                className="select"
                onClick={() => this.props.history.push('/track')}
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaMap className="Icons-select" />
                <p className="white"> {translate(locale, 'profileLoc')}</p>

                <p className="white">موقع منظم الحمله</p>
              </Button>
            </div>

            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                {/* <FaMale className="Icons-select" /> */}
                <FaFemale className="Icons-select" />
                <p className="white"> {translate(locale, 'profileWC')}</p>

                <p className="white">دورات مياه</p>
              </Button>
            </div>
            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaUtensils className="Icons-select" />
                <p className="white"> {translate(locale, 'profileFood')}</p>
                <p className="white">غذاء</p>
              </Button>
            </div>
          </div>
        </div>

        <SimpleModalWrapped />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Profile);
