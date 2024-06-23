import './App.css';
import GlobalStyle from "./global/global";
import {RouterProvider} from "react-router-dom";
import router from "./routes/router";
import {HeaderColorProvider} from "./context/headerColorContext";
import {ModalProvider} from "./context/ModalContext";
import {ThemeProvider} from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <HeaderColorProvider>
                <ModalProvider>
                    <RouterProvider router={router}/>
                    <GlobalStyle/>
                </ModalProvider>
            </HeaderColorProvider>
        </ThemeProvider>
    );
}

export default App;
