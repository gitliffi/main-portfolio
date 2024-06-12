import Header from './components/Header';
import About from './components/About';
import GlobalStyles from "./styles/GlobalStyles.tsx";

function App() {
    const currentPage = window.location.pathname;

    return (
        <>
            <GlobalStyles/>
            <div className="App">
                <Header/>
                {currentPage === '/' && <About/>}
                {/* Add conditions for other pages here */}
            </div>
        </>
    );
}

export default App;