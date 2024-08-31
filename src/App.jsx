import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import LoadingSpinner from './Components/Spinner';

const HomePage = lazy(() => import('./Pages/HomePage'));
const Destinations = lazy(() => import('./Pages/Destinations'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const PackageDetail = lazy(() => import('./Pages/PackageDetail'));
const AllPackages = lazy(() => import('./Pages/AllPackages'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a 1.5 second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/destinations' element={<Destinations />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/package/:id' element={<PackageDetail />} />
              <Route path='/packages' element={<AllPackages />} />
            </Routes>
          </Layout>
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
