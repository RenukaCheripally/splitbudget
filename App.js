import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';

export default function App() {
  const handlePress = () => {console.log("clicked")}

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>First mobile app!</Text>
      <Image source={{
        uri: "https://picsum.photos/200/300",
        width: 200,
        height: 300
      }} />
      <Button title="Click" color="orange" onPress={() => alert("button tapped")} />
      <StatusBar style="auto" />
    </SafeAreaView>
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
