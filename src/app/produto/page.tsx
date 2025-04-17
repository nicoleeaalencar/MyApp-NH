import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';

const ProdutoPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image 
          source={require('../assets/images/sashimi.jpg')} 
          style={styles.image} 
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Sashimi</Text>
            <Text style={styles.price}>R$ 00,00</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.text}>Salmão</Text>
            <Text style={styles.text}>Tilápia</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Acompanhamento</Text>

            <View style={styles.row}>
              <Text style={styles.text}>Molho Shoyu</Text>
              <AntDesign name="plus" size={20} color="brown" />
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Folhas de shisô</Text>
              <AntDesign name="plus" size={20} color="brown" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.cartButton}>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.footerText}>
          @ Todos os direitos reservados a Nori House
        </Text>
      </View>
    </View>
  );
};

export default ProdutoPage;
