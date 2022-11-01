import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from './Screens/Register'
import Login from './Screens/Login'


const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        
      </MainStack.Navigator>
    </NavigationContainer>
    
    
  );
}

