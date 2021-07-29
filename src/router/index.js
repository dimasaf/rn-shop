import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ProductOverview from '../screens/shop/ProductOverview/';
import ProductDetail from '../screens/shop/ProductDetail/';
import CartScreen from '../screens/shop/CartScreen/';
import UserProduct from '../screens/user/UserProducts/';
import EditProduct from '../screens/user/EditProducts/';

import HeaderButton from '../components/HeaderButton/';
import Order from '../screens/shop/OrderScreen/';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductOverview}
        options={({navigation, route}) => ({
          headerRight: props => (
            <HeaderButton
              onPress={() => {
                navigation.navigate('Cart');
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetail}
        options={({route}) => ({title: route.params.name})} //need to be fixed
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Edit" component={EditProduct} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainStackNavigator} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="User" component={UserProduct} />
    </Drawer.Navigator>
  );
};

const index = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
