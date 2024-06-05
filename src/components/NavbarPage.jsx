import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiArchiveLine } from 'react-icons/ri';
import ThemeButton from './ThemeButton';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import Navigation from './Navigation';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { LocaleProvider } from '../contexts/LocaleContext';



class NavbarPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      initializing: true,
      localeContext: {
        locale: 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === 'id' ? 'en' : 'id'
              }
            }
          })
        }
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  onLogout() {
    this.setState({
      authedUser: null
    });
    putAccessToken('');
    window.location.href = '/';
  }

  render() {

    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <Router>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Router>
        </LocaleProvider>
      )
    }


    return (
      <LocaleProvider value={this.state.localeContext}>
        <header className='note-detail-header'>
          <h1><Link to="/">Aplikasi Catatan Pribadi</Link></h1>
          <div style={{ fontSize: '34px' }}> {/* Ini adalah inline styling */}
            <Link to="/archives" className="button">
              <RiArchiveLine />
            </Link>
          </div>
          <ThemeButton />
          <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
        </header>
      </LocaleProvider>
    )
  }
}

export default NavbarPage;
