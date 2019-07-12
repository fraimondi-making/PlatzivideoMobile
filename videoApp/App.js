import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'

export default function App() {
  return (
    <Home>
      <Header/>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionList />
    </Home>
  );
}

