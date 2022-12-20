import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider';

const foods = [

  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://media.istockphoto.com/id/543663322/photo/meat-lasagna.jpg?b=1&s=170667a&w=0&k=20&c=sCZaWMZ3gUG4xMz146sz_SV62WyZp1nV2FVqfi3zZss=",
  },
  {
    title: "Lasagna",
    description: "Amazing Indian dish with lenderloin chicken off the sizzles",
    price: "$19.25",
    image: "https://media.istockphoto.com/id/911502736/photo/tandoori-chicken.jpg?s=612x612&w=0&k=20&c=hDjQEaveTpPyKNp8JHR4_7CHZRbrDb4_sH-VDsamPJU=",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles wiht cheese and sauce. A declicious Mexican dish",
    price: "$14.50",
    image: "https://st3.depositphotos.com/1373322/15052/i/450/depositphotos_150524334-stock-photo-tortillas-with-tomato-salsa-chicken.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "Healthy varietst of fresh greens, topped with baked chicken.",
    price: "$21.50",
    image: "https://olo-images-live.imgix.net/b3/b30303bbc7904eaaa4f1535fecb29633.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=10bc93f04dba0ca7509cf3b0fa69ad35",
  },
]; 

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});



export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}> 
    {foods.map((food, index) => (
      <View key={index}>
        <View style ={styles.menuItemStyle}>
          <FoodInfo food={food} />
          <FoodImage food={food} />
        </View>
        <Divider width={0.5} orientation="vertical"/>
      </View>
    ))}
  </ ScrollView >
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);