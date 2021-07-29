import React from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import CartItem from '../../../components/CartItem/';
import * as cartActions from '../../../features/Cart/action';
import * as orderActions from '../../../features/Order/action';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const totalAmount = useSelector(state => state.cart.totalAmount);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) => {
      a.productId > b.productId ? 1 : -1;
    });
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(orderActions.addOrder(cartItems, totalAmount));
          }}
        />
        {/* {console.log(cartItems)} */}
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            deletable
            onRemove={() => {
              dispatch(cartActions.removeCartItem(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
