import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieItem from '../components/movies/MovieItem';
import type { Movie } from '../types/app';

export default function Favorite(): JSX.Element {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('@FavoriteList');
      if (favoritesData !== null) {
        setFavorites(JSON.parse(favoritesData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieItem movie={item} size={{ width: '48%', height: 250, marginBottom: 16 }} coverType="poster" />
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorite movies yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
  },
  movieItem: {
    width: '48%',
    height: 250,
    marginBottom: 16,
  },
});
