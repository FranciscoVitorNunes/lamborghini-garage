import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#4b4141ff",
    borderWidth: 2,
    borderColor: "#333333",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 210,
    resizeMode: "contain",
    marginBottom: 10,

  },
  imageLogo: {
    flex: 1,
    width: "65%",
    resizeMode: "contain"
  },
  carBrand: {
    color: "#ffffffff",
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic"
  },
  carName: {
    color: "#ffffffff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  carImage: {
  width: 300,
  height: 200,
  resizeMode: "contain",
  },

  priceContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 180,
    padding: 10,
    alignItems: "center",
    marginTop: 33,
  },
  price: {
    top: -25,
    color: "#ffffffff",
    fontSize: 20,
  }
});