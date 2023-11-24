import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/ShowPage';

const queryClient = new QueryClient()

function App() {


  return (
    <div>
  <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>

          <Route path="/show/:showId" element={<Show />} />

          <Route path="*" element={<>Page Not Found</>} />

          {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<Tos />} />
          </Route>
          <Route path="contact-us" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
</QueryClientProvider>

    </div>
  );
}

export default App;
