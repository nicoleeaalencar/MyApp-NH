// src/app/produto/style.ts

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 180,
    borderColor: 'purple',
    borderWidth: 2,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    color: '#8B0000',
    fontSize: 18,
  },
  price: {
    fontWeight: 'bold',
    color: '#8B0000',
  },
  section: {
    backgroundColor: '#eee',
    padding: 8,
    marginTop: 12,
    borderRadius: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  text: {
    marginLeft: 10,
    marginBottom: 4,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cartButton: {
    backgroundColor: '#8B0000',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  footer: {
    backgroundColor: '#8B0000',
    paddingTop: 80,
    paddingBottom: 24,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
  },
});

export default styles;
