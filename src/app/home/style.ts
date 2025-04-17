import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

 
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  textContainer: {
    flexShrink: 1,
  },

  restaurantName: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#000",
    marginTop: 0,
  },

  restaurantJp: {
    fontSize: 16,
    color: "#555",
  },


  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    flexWrap: 'wrap',
    gap: 10,
  },

  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },

  categoryButtonActive: {
    backgroundColor: '#800000',
  },

  categoryText: {
    color: '#333',
    fontSize: 14,
  },

  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },


  menuItem: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    alignItems: "center",
  },

  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  menuText: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#800000",
  },

  menuDescription: {
    fontSize: 14,
    color: "#444",
    marginVertical: 4,
  },

  menuPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#800000",
  },


  footer: {
    backgroundColor: "#800000",
    padding: 10,
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  footerText: {
    color: "#fff",
    fontSize: 13,
  },
});
