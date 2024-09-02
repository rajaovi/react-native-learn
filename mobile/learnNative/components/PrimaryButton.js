import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Presssed");
  }
  return (
    <View style={styles.buttonOuterContinaer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContinaer, styles.pressed]
            : styles.buttonInnerContinaer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContinaer: {
    borderRadius: 27,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContinaer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
