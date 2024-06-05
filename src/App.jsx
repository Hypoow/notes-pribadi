import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteApp from './components/NoteApp';
import ArchivePage from './pages/ArchivePage';
import NewNotePage from './pages/NewNotePage';
import NoteDetailPage from './pages/NoteDetailPage'; 
import NotFoundPage from './pages/NotFoundPage'; 
import LoginPage from './pages/LoginPage';
import RegisterPage from  './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { LocaleProvider } from './contexts/LocaleContext';



class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authedUser: null,
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
  
  render(){

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
    <Router>
      <Routes>
        <Route path="/" element={<NoteApp />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/notes/new" element={<NewNotePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Router>
      </LocaleProvider>
  );
};
}

export default App;
