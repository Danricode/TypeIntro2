import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const name = "Daniel";
const age = 26;
let message = name+" "+age;
export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Text></Text>
      <StatusBar style="auto" />
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
});
