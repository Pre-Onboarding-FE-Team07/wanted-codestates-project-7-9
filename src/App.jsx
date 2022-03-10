import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import ReviewListPage from './pages/ReviewListPage';
import ReviewDetailsPage from './pages/ReviewDetailsPage';
import ReviewRegisterPage from './pages/ReviewRegisterPage';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ReviewListPage />} />
          <Route path="/details/:id" element={<ReviewDetailsPage />} />
          <Route path="/register" element={<ReviewRegisterPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
