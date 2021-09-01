import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import API from "../../components/api";
import React, { useState, useEffect } from "react";
import styles from "./style";
import ImageBack from "../../components/views/default/imageBack";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    await API.get("movies.json")
      .then(async (response) => {
        setMovies(response.data.movies);
      })
      .catch((err) => {
        setMovies([]);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ImageBack style={styles.screen}>
      <Image
        source={require("../../assets/loginScreen.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Listagem de filmes</Text>
        <ScrollView style={styles.lista}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            movies.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  alert("ano de lançamento: " + item.releaseYear);
                }}
              >
                <Text style={styles.itemList}>{item.title}</Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </ImageBack>
  );
};

export default Home;
