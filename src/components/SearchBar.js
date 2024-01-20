import { View,StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => (
	<View style={styles.backgroundStyles}>
      <Icon name="search" style={styles.iconStyles} />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
	</View>
);

const styles = StyleSheet.create({
 backgroundStyles:{
   backgroundColor:'#F0EEEE',
   height:50,
   borderRadius:5,
   marginHorizontal:15,
   flexDirection:'row',
   marginVertical:10
 },
 iconStyles:{
   fontSize:35,
   alignSelf:'center',
   marginHorizontal:15 	
 },
 inputStyle:{
   flex:1,
   fontSize:18
 }		
});
 
export default SearchBar;