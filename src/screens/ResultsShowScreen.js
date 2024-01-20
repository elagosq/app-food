import React,{ useState,useEffect } from "react";
import { View,Text,StyleSheet,FlatList,Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
	const [result,setResult] = useState(null);
	const id = route.params.id;
	
	const getResult = async id => {
	  try {
		const response = await yelp.get(`${id}`);
	    setResult(response.data);
	  } catch (error) {
		console.log(error);
	  }	
	}

	useEffect(() => {
       getResult(id)
	}, []);

	if(!result) return null;
	
	return (
	<View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
	  <FlatList 
	    data={result.photos}
		keyExtractor={photo => photo}
		renderItem={({item}) => (
			<Image style={styles.image} source={{uri : item}}/>
		)}
	  />
	</View>
    );
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   alignItems:'center'
  },
  title:{
    fontSize:24,
	fontWeight:'bold',
	marginTop:10
  },	
  image:{
	width:300,
	height:200,
	marginVertical:5
  }
})
 
export default ResultsShowScreen;