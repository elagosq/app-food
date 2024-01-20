import React,{useEffect, useState} from "react";
import { StyleSheet,ScrollView,ActivityIndicator,View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term,setTerm] = useState('');
	const [loading,setLoading] = useState(true);
	const [searchApi,results,errorMessage] = useResults();
    
    useEffect(() => {
     results.length > 0 && setLoading(false); 
	},[results]);

	const filterResultsByPrice = price => results.filter(result => result.price === price);

	const handleSearchApi = term => {
		setLoading(true);
		setTerm('');
        searchApi(term);
	}
	
	return (
	<>
	  <SearchBar 
	    term={term}
		onTermChange={setTerm}
		onTermSubmit={() => handleSearchApi(term)}
	  />
	  {errorMessage ? <Text>{errorMessage}</Text> : null}
	  <ScrollView>
        {loading ? <View style={styles.loading}><ActivityIndicator size="large" color="#0000ff"/></View> : 
		<>
		  <ResultsList
			results={filterResultsByPrice('$')} 
			title="Cost Effective"
		  />
		  <ResultsList
			results={filterResultsByPrice('$$')}  
			title="Bit Pricier"
		  />
		 <ResultsList 
			results={filterResultsByPrice('$$$')} 
			title="Big Spender"
		  />
		</>}
	  </ScrollView>
	</>
  );
}

const styles = StyleSheet.create({
  loading:{
	height:300,
	justifyContent:'flex-end'
  }	
})
 
export default SearchScreen;