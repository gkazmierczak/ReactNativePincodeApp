import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { dismissLockscreen } from "../utils/navigation";
import { LockscreenStackParamList } from "../components/AppContainer";

type Props = NativeStackScreenProps<LockscreenStackParamList, "Lockscreen">;

export default function LockScreen({ navigation }: Props) {
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      const { type, source } = e.data.action;
      console.log(e);
      if (source !== "LockscreenModal") {
        e.preventDefault();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Click button below to unlock</Text>

      <TouchableOpacity
        style={styles.navigationButton}
        onPress={dismissLockscreen}
      >
        <Text>Unlock</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => navigation.push("Info")}
      >
        <Text>push</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationButton: {
    backgroundColor: "white",
    margin: 30,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});