import React from 'react';
import {FlatList, Button, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../../components/ProductItem/';
import * as productsActions from '../../../features/Products/action';

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {}}>
          <Button
            title="Edit"
            onPress={() => {
              props.navigation.navigate('Edit', {
                ProductId: itemData.item.id,
              });
            }}
          />
          <Button
            title="Delete"
            onPress={() => {
              dispatch(productsActions.deleteProduct(itemData.item.id));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
