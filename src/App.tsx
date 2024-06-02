import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';

// queryClient를 정의합니다.
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router basename={'/CNU_Blog/'}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              {/* todo (3-3) Post 추가 */}
              <Route path="/post" element={<Post />} />
            </Route>
            {/* todo (5-1) Write 추가 */}
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
