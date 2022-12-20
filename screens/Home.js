import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from "react";
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants, } from '../components/RestaurantItems'

const YELP_API_KEY =
  "O_JsAQNFSq9qjQR0nDFJGMtQsbXZC9X7KlTXGkIKiCIISTe1G-qdbvUkbot6p_3oi34TY23ymRmUIx6RPXG_fZg5SvwUPuoH6DASMoah3e_BzBnWIOllR8vNlomhY3Yx"; 

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = 
    "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses));
  };

  useEffect(() => { 
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>       
        <HeaderTabs />
        <SearchBar /> 
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories /> 
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView> 
    </SafeAreaView>
  );
}