import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import Home from './Screens/Home';
import AddPost from './Screens/AddPost';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

const App = () => {
  return (
    <>
      <Text>Hello from app.js</Text>
      <Home />
      <AddPost />
      <SignIn />
      <SignUp />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
