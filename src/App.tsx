import Header from './components/Header';
import AboutPage from './components/About';

function App() {
    const currentPage = window.location.pathname;

    return (
        <div className="App">
            <Header />
            {currentPage === '/' && <AboutPage />}
            {/* Add conditions for other pages here */}
        </div>
    );
}

export default App;