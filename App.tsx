import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AllExpenseScreen from './screens/all_expense_screen';
import RecentExpenseScreen from './screens/recent_expense_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RecentExpenseScreen} />
        <Tab.Screen name="Profile" component={AllExpenseScreen} />
      </Tab.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
       >
        <Stack.Screen name="Main" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
