import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from './ShredLayout/ShredLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));
const TweetDetails = lazy(() => import('../pages/TweetDetails/TweetDetails'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="tweets/:tweetId" element={<TweetDetails />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={2500} theme="colored" />
    </>
  );
};

