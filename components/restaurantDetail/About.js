import React from "react";
import { View, Text, Image } from "react-native";

const image = "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"

const title = "Farm";

const description = "Thai • Comfort Food • $$ • (2913+)"

export default function About(props) {

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text    
    style={{
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  }}
>
    {props.description}
  </Text>
);