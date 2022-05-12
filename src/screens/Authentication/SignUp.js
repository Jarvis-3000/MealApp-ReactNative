import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

function SignUp({navigation}) {
  const [name, setName] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputFields}>
          <TextInput
            label="Name"
            mode="outlined"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: false })}
          />
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
          <Button mode="contained">Submit</Button>
        </View>
      </View>
        <Button label="signIN" icon="arrow-right" onPress={()=>navigation.goBack()}>
          SignIn
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

export default SignUp;
