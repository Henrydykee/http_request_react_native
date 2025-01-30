import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AllExpenseScreen from './screens/all_expense_screen';
import RecentExpenseScreen from './screens/recent_expense_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ManageExpenseScreen from './screens/manage_expense_screen';
import { GlobalStyles } from './utils/style';
import { Ionicons } from '@expo/vector-icons'
import AddExpenseButton from './components/ui/button';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={({navigation}) => (
        {
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500, },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold', },
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          // tabBarLabelStyle : { fontSize: 10, },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: () => <AddExpenseButton onPress={() => { 
            navigation.navigate('Manage Expense', { expenseId: null }) 
          }} icon="add" />

        }
      )}

      >
        <Tab.Screen name="Recent Expense" component={RecentExpenseScreen}
          options={{
            title: 'Recent Expense',
            tabBarLabel: 'Recent Expense',
            tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color}

            />
          }}

        />
        <Tab.Screen name="All Expense" component={AllExpenseScreen}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />
          }}
        />

      </Tab.Navigator>
    )
  }


  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>

        <Stack.Navigator >
          <Stack.Screen name="Expense" component={MyTabs} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Manage Expense' component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}

