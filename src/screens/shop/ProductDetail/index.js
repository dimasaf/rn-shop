import React from 'react';
import {Button, ScrollView, StyleSheet, Text, Image, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import * as cartAction from '../../../features/Cart/action';

const index = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const {ProductId} = props.route.params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === ProductId),
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.actions}>
        <Button
          title="Add To Cart"
          onPress={() => {
            dispatch(cartAction.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
