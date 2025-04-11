import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './style';

const menuItems = [
  {
    id: '1',
    name: 'Temaki',
    description: 'Cone de alga recheado com arroz e salmão.',
    price: 'R$ 18,90',
    image: require('../assets/images/temaki.jpg'),
  },
  {
    id: '2',
    name: 'Sashimi',
    description: 'Fatias finas de salmão fresco.',
    price: 'R$ 32,00',
    image: require('../assets/images/sashimi.jpg'),
  },
  {
    id: '3',
    name: 'Combinadinho',
    description: '8 peças variadas de sushi e sashimi.',
    price: 'R$ 42,50',
    image: require('../assets/images/combinadinho.jpg'),
  },
];

const MenuScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={(
          <View style={styles.header}>
            <Image source={require('../assets/images/nori-house.jpg')} style={styles.headerImage} />
            <Text style={styles.restaurantName}>Nori House</Text>
            <Text style={styles.restaurantDescri}>O melhor da Ásia na sua casa!</Text>
            <Text style={styles.restaurantOpcao}>Combos   Bebidas   Promoção</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push(`../produto/${item.id}`)}
          >
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>{item.name}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
              <Text style={styles.menuPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Nori House</Text>
        <Text style={styles.footerText}>Endereço: Rua dos Bolos, 000</Text>
        <Text style={styles.footerText}>Telefone: (11) 1234-5678</Text>
      </View>
    </View>
  );
};

export default MenuScreen;
