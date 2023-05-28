import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native';
import Main from './src/components/Main.jsx'

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
