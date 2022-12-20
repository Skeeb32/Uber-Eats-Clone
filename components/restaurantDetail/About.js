import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://www.thespruceeats.com/thmb/D9hctWPH31A5oiQ34J4Hknc6x0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg",
  price: "$$",
  reviews: '1500',
  rating: 4.5,
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
}

const {name, image, price, reviews, rating, categories } = yelpRestaurantInfo

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
return (
  <View>
    <RestaurantImage image={image} />
    <RestaurantName name={name} />
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