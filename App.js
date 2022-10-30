import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput } from 'react-native';
import Ionicon from "react-native-vector-icons/Ionicons"
import Profile from './Screens/Profile';


const App = () => {
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    fetchPosts();
    return () => {

    }

  }, [])

  const fetchPosts = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {

        setfilterData(responseJson);
        setmasterData(responseJson);
      }).catch((error) => {
        console.error(error);
      })

  }
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ?
          item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setsearch(text);
    }
    else {
      setfilterData(masterData);
      setsearch(text);

    }
  }

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}{'. '}{item.title}

      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 3, width: '100%', backgroundColor: 'skyblue' }}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>


      <View style={styles.container}>
        <View style={{ height: 160, backgroundColor: 'lightblue', justifyContent: 'center', paddingHorizontal: 5 }}>

          <View style={styles.searchSection}>

            <Ionicon style={styles.searchIcon} name="search-outline" size={30}></Ionicon>
            <TextInput

              style={styles.TextInputStyle}
              value={search}
              onChangeText={(text) => searchFilter(text)}
              placeholder="Search name or email"
            />

          </View>

        </View>
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          onPress={() => navigation.navigate('Profile')}>

        </FlatList>

      </View>

      <View style={{ height: 50, backgroundColor: 'lightblue', justifyContent: 'center', paddingHorizontal: 5 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  itemStyle: {
    padding: 15,

  },
  TextInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: 12,
    borderRadius: 100,

  },
  searchSection: {

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 70,
    borderColor: 'skyblue',
    borderWidth: 3,
  },
  searchIcon: {
    padding: 10,
    marginLeft: 17,
  }
});

export default App;
