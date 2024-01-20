import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results,setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
   try {
	  const response = await yelp.get('/search', {
      params: {
        limit:50,
        term:searchTerm,
        location: 'san jose'
	    }
	  });
	  setResults(response.data.businesses);
	} catch (error) {
	  setErrorMessage('Something went wrong');
	}
  };
  
  // Se llama la función searchApi cuando el componente
  // se renderiza por primera vez
  // searchApi('pasta');

  useEffect(() => {
     searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
}