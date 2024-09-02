import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress(val);
  }

  return (
    <View style={styles.buttonOuterContinaer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContinaer, styles.pressed]
            : styles.buttonInnerContinaer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
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
    backgroundColor: Colors.primary500,
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
