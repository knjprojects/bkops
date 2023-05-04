import { StyleSheet, Text, View } from "react-native";
import {Redirect} from "expo-router"
const Page=() =>{
  return (
       <Redirect href="/home" />
  );
};export default Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
 title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
