import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import {
  useGetAnyDataQuery,
  useUpdatePostMutation,
} from './store/services/storeApiCalls';
import { motion } from 'framer-motion';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import QuizesPage from './pages/QuizesPage';
import axios from 'axios';
import { useEffect } from 'react';
const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  useEffect(() => {
    updatePost({
      email: 'dadwdawdawd@lalala.com',
      password: 'stringwdwdwdwdwd',
    });
  }, []);

  // useUpdatePostMutation({ selectFromResult: {'dwdww': 'wwww'}
  // });
  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      className="App"
    >
      <div className="navigation">
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/quizes">Quizes</Link>
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quizes" element={<QuizesPage />} />
      </Routes>
    </motion.div>
  );
};

export default App;
