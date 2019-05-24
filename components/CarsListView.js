import React from 'react';
import { StyleSheet, Text, View, Picker, ListView } from 'react-native';
import CarRow from './CarRow';

import carsData from '../data/cars.json';
import availability from '../data/availability.json';

export default class CarsListView extends React.Component {
  constructor(props) {
    super(props)
    sortedCarsData = carsData
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(sortedCarsData),
      sortBy: 'default'
    };
  }


  sortArrayAsc = (array, key) => {
    return array.sort(function (a,b) {
      return a.make.localeCompare(b.make)
    })
  }


  onScroll = (event) => {
    var currentOffset = event.nativeEvent.contentOffset.y;
    console.log("Loading more data");
  }

  updateSort = (val) => {
    console.log(`Sorting by: ${val}`)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    if (val === 'default') {
      console.log("default tapped")
      this.setState({
        sortBy: val,
        dataSource: ds.cloneWithRows(carsData),
      })
    }
    else {
      console.log("not default tapped")
      this.sortedCarsData = this.sortArrayAsc(carsData, val)

      this.setState({
        sortBy: val,
        dataSource: ds.cloneWithRows(sortedCarsData),
      })
    }
  }

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  render() {
    return (
      <View
        style={styles.container}>
        <Picker selectedValue = {this.state.sortBy} onValueChange = {this.updateSort}>
            <Picker.Item label = "Name" value = "name" />
            <Picker.Item label = "Availability" value = "availability" />
            <Picker.Item label = "Default" value = "default" />
        </Picker>
        <ListView
          dataSource={this.state.dataSource}
          onScroll={({nativeEvent}) => {
            if (this.isCloseToBottom(nativeEvent)) {
              console.log("Loading more cars...")
              //will be loading more cars here
              // we will setup a paging approach where the state will have limit and next id
              // using this next id it will load data.
            }
          }}
          renderRow={(data) => <CarRow {...data}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#fff'
  },
});
