import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";

type DataItem = { title: string; releaseYear: string; id: string };

type State = {
  isLoading: boolean;
  dataSource?: DataItem[];
};

const FetchExample = ({ }: State) => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataSource, setDataSource] = useState()


  useEffect(() => {
    fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then((responseJson: { movies: any }) => {
        setIsLoading(false)
        setDataSource(responseJson.movies)
      })
      .catch(error => {
        console.error(error);
      });

  }, [])


  if (isLoading)
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    );


  return (
    <View style={{ backgroundColor: 'red' }}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        )}
        keyExtractor={({ id }, index) => id}
      />
    </View>
  );

}


export default FetchExample