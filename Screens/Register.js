import {
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  Text,
} from "react-native";

function Registration() {
  return (
    <>
      <ImageBackground
        style={styles.view}
        source={require("../images/PhotoBG.jpg")}
        resizeMode="cover"
      >
        <ImageBackground style={styles.image}>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            // value={name}
            // onChangeText={nameHandler}
            placeholder="Username"
            style={styles.input}
          />
        </ImageBackground>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "end",
    width: 375,
    minHeight: 812,
  },
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: "#F6F6F6",
    marginTop: 22,
    marginLeft: 16,
    textAlign: "center"
  },
  image: {
    width: 375,
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    textAlign: "center",
    justifyContent: "center",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    fontFamily: 'Roboto',
  },
});

export default Registration;
