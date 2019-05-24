import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import CarsListView from './components/CarsListView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <CarsListView/>
    );
  }
}