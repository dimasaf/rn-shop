import React from 'react';
import {FlatList, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../../components/ProductItem/index';
import * as cartAction from '../../../features/Cart/action';

const ProductOverview = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  let products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}>
          <Button
            title="Detail"
            onPress={() => {
              props.navigation.navigate('Detail', {
                ProductId: itemData.item.id,
              });
            }}
          />
          <Button
            title="Add To Cart"
            onPress={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductOverview;

const styles = StyleSheet.create({});
