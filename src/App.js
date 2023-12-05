import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/ShowPage';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();


function App() {
  return (
    <div>
      <GlobalTheme>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>

            <Route path="/show/:showId" element={<Show />} />

            <Route path="*" element={<>Page Not Found</>} />
          </Routes>
        </HashRouter>
      </QueryClientProvider>
      </GlobalTheme>
    </div>
  );
}

export default App;
