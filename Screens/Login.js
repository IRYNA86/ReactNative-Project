import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

function Login() {
    return (
      <View 
      style={styles.container}
      >
        <Text>Login</Text>
        <Image style={styles.image} source={require('../images/PhotoBG.jpg')}/>
        <TextInput
        // value={name}
        // onChangeText={nameHandler}
        placeholder="Username"
        style={styles.input}
        />
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10,
    },
    image:{
      width: 200,
      height: 44,
    }
  });

  export default Login