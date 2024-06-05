import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';
import '../styles/style.css';

class ThemeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: localStorage.getItem('theme') || 'light',
            toggleTheme: () => {
                this.setState((prevState) => {
                    const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
                    localStorage.setItem('theme', newTheme);
                    return {
                        theme: newTheme
                    };
                });
            }
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute('data-theme', this.state.theme);
        }
    }

    componentDidMount() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
    }



    render() {
        return (
            <ThemeProvider value={this.state}>
                <ToggleTheme />
            </ThemeProvider>
        )
    }
}

export default ThemeButton;