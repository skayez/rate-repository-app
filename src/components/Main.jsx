import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

const Main = () => {
  return (
    <View>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;