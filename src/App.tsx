import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './routes/Dashboard,tsx/Dashboard';
import { Members } from './routes/Members/Members';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <div className="App font-poppins">
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
