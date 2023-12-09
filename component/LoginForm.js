import {
  Pressable,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from "react-native";

export default function LoginForm() {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "column", gap: 10 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            width: 325,
            paddingVertical: 10,
            paddingLeft: 8,
            borderColor: "white",
          }}
          placeholder="Email"
          placeholderTextColor={"white"}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            width: 325,
            paddingVertical: 10,
            paddingLeft: 8,
            borderColor: "white",
          }}
          placeholderTextColor={"white"}
          placeholder="Password"
        />
      </View>
      <View
        style={{
          position: "relative",
          width: 325,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingBottom: 15,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 13,
              position: "absolute",
              right: 0,
              color: "white",
            }}
          >
            Forgot Password ?
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          style={{
            backgroundColor: "#0000FF",
            padding: 10,
            borderRadius: 8,
            width: 325,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
