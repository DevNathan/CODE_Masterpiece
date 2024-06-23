import {ThemeContext, ThemeProvider as StyledProvider} from 'styled-components';
import {useCallback, useContext, useState} from "react";
import theme from "../global/theme";

// 사용자의 클라이언트 테마를 받아서 디폴트로 설정한다.
const getClientTheme = () => {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        const savedTheme = sessionStorage.getItem('theme');
        return savedTheme || getClientTheme();
    };
    const [themeMode, setThemeMode] = useState(getInitialTheme);
    const themeValue = themeMode === 'light' ? theme.lightTheme : theme.darkTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <StyledProvider theme={themeValue}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
};

function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const { themeMode, setThemeMode } = context;

    const toggleTheme = useCallback(() => {
        const newTheme = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newTheme);
        sessionStorage.setItem('theme', newTheme);
    }, [themeMode, setThemeMode]);

    return [themeMode, toggleTheme];
}

export {ThemeProvider, useTheme};