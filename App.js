import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import LoginForm from "./component/LoginForm";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 215 }}>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            paddingBottom: 35,
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
            Instalone
          </Text>
        </View>
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
  },
});
