import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";

//
import { setUser } from "../../redux/User/actions";

function SignIn({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setUser({ id: "123", name: "satish" }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputFields}>
          <TextInput
            label="Email"
            mode="outlined"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: false })}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: false })}
          />
        </View>
        <View>
          <Button icon="home" mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </View>
      <Button icon="arrow-left" onPress={() => navigation.navigate("SignUp")}>
        SignUp
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  form: {
    width: "100%",
    padding: 10,
  },
  inputFields: {
    marginVertical: 10,
  },
});

export default SignIn;
