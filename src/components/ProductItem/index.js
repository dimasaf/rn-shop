import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableCmp,
} from 'react-native';

const ProductItem = props => {
  return (
    <View style={styles.product}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.image}} style={styles.image} />
        </View>
        <View styles={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.action}>
          {/* <Button title="View Detail" onPress={props.onViewDetail} />
          <Button title="Add to Cart" onPress={props.onAddCart} /> */}
          {props.children}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  details: {
    justifyContent: 'center',
    height: '15%',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
});
