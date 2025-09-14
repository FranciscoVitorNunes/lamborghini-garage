import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderWidth: 2,
    borderColor: "#333333",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    button: {
    flexDirection: "row",
    backgroundColor: "#01A6B3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  icon: {
    marginRight: 10,
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  }
});