import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.primary700,
    fontFamily: "open-sans-bold",
    borderWidth: 2,
    borderColor: Colors.white,
    color: Colors.white,
    fontSize: 24,
    //fontWeight: "bold",
    padding: 12,
    textAlign: "center",
    maxWidth: "80%",
    width: 300,
  },
});
