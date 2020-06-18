import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Home from './src/pages/Home';
import Detail from './src/pages/Details';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'green',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="md-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Detail}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="md-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    //<>
    //   <StatusBar barStyle="light-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Home />
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
export default App;
