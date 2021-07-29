import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../../../components/OrderItem/';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = useSelector(state => state.order.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default index;

const styles = StyleSheet.create({});
