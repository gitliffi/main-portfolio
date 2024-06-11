import Header from './components/Header';
import About from './components/About';

function App() {
    const currentPage = window.location.pathname;

    return (
        <div className="App">
            <Header />
            {currentPage === '/' && <About />}
            {/* Add conditions for other pages here */}
        </div>
    );
}

export default App;