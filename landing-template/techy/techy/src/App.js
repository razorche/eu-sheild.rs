
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import AOS from 'aos';
import "aos/dist/aos.css"
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter';
import ScrollToTop from './components/ScrollToTop';




function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="IT, Tech, Web Security, Data Science, Analytics, Data, sass, software company" />
        <meta name="description"
          content="Techy – IT Solution & Web Security React Template is designed especially for the agency, multipurpose and business and those who offer business-related services." />
        <meta property="og:site_name" content="Sinco" />
        <meta property="og:url" content="https://themeforest.net/user/hamina-themes/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Techy – IT Solution & Web Security React Template" />
      </Helmet>
      <ScrollToTop />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
