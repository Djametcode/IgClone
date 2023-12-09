import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import LoginForm from "./component/LoginForm";
import {
  useFonts,
  Figtree_300Light_Italic,
  Figtree_400Regular,
} from "@expo-google-fonts/figtree";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Figtree_400Regular,
    Figtree_300Light_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          paddingBottom: 35,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: "white",
            fontFamily: "Figtree_400Regular",
          }}
        >
          Instalone
        </Text>
      </View>
      <View>
        <LoginForm />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", width: 325 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center", color: "white" }}>
            or
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Entypo name="facebook" size={30} color={"blue"} />
        <Text style={{ color: "blue", fontWeight: "bold" }}>
          Login With Facebook
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 30 }}>
        <Text style={{ color: "white" }}>Don't have account ? create one</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    position: "relative",
    fontFamily: "Figtree_400Regular",
  },
});
