import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './style';


interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any; 
  category: 'Combos' | 'Bebidas' | 'Promoções'; 
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Temaki',
    description: 'Cone de alga recheado com arroz e salmão.',
    price: 'R$ 18,90',
    image: require('../assets/images/temaki.jpg'),
    category: 'Combos',
  },
  {
    id: '2',
    name: 'Sashimi',
    description: 'Fatias finas de salmão fresco.',
    price: 'R$ 32,00',
    image: require('../assets/images/sashimi.jpg'),
    category: 'Combos',
  },
  {
    id: '3',
    name: 'Combinadinho',
    description: '8 peças variadas de sushi e sashimi.',
    price: 'R$ 42,50',
    image: require('../assets/images/combinadinho.jpg'),
    category: 'Combos',
  },
  {
    id: '4',
    name: 'Refrigerante',
    description: 'Lata 350ml.',
    price: 'R$ 6,00',
    image: require('../assets/images/refrigerante.jpg'),
    category: 'Bebidas',
  },
  {
    id: '5',
    name: 'Promo Temaki + Refri',
    description: '1 Temaki + Refrigerante por preço especial.',
    price: 'R$ 22,00',
    image: require('../assets/images/promo.jpg'),
    category: 'Promoções',
  },
];


type Category = 'Combos' | 'Bebidas' | 'Promoções';

const categories: Category[] = ['Combos', 'Bebidas', 'Promoções'];

const MenuScreen = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category>('Combos'); 


  const filteredItems = useMemo(() => {
    return menuItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

 
  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={(
          <View style={styles.header}>
            <View style={styles.logoRow}>
              <Image source={require('../assets/images/')} style={styles.logoImage} />
              <View style={styles.textContainer}>
                <Text style={styles.restaurantName}>O MELHOR DA ÁSIA NA SUA CASA</Text>
                <Text style={styles.restaurantJp}>アジアの最高のものをご自宅で</Text>
              </View>
            </View>

            <View style={styles.categoryContainer}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  onPress={() => handleCategorySelect(cat)}
                  style={[
                    styles.categoryButton,
                    selectedCategory === cat && styles.categoryButtonActive,
                  ]}
                >
                  <Text style={[
                    styles.categoryText,
                    selectedCategory === cat && styles.categoryTextActive
                  ]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
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
        <Text style={styles.footerText}>@ Todos os direitos reservado a Nori House</Text>
      </View>
    </View>
  );
};

export default MenuScreen;
