import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import availability from '../data/availability.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  text: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 18,
    color: 'white'
  },
  availableText: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 15,
    color: 'white'
  },
  photo: {
    height: 120,
    width: '100%',
    marginBottom: 1
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buyButton: {
    backgroundColor: '#2f9c0a',
    color: 'white',
    borderRadius: 5,
  }
});

function handlePurchase() {
  alert("Car Purchased!")
}

const CarRow = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.img}} style={styles.photo} />
    <View style={styles.textContainer}>
        <Text style={styles.text}>
        {`${props.make} ${props.model}`}
        </Text>
        <Text style={styles.text}>
        {`${props.year}`}
        </Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.availableText}>
        {`${availability[props.id]}`}
      </Text>
      {availability[props.id] == "In Dealership" &&
        <Button
          style={styles.buyButton}
          title="Buy Now"
          onPress={handlePurchase} />
      }
    </View>
  </View>
);

export default CarRow;