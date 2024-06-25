import Header from './components/Header';
import About from './components/About';
import GlobalStyles from "./styles/GlobalStyles.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <GlobalStyles/>
            <Router>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" Component={About}/> {/* No longer needs exact */}
                        <Route path="/about" Component={About}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;