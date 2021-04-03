
import axios from 'axios';

export const fetchData = async (setter) => {
  try {
    const res = await axios.get(
      'https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e'
    );
    setter(res?.data);
    
  } catch (error) {
    console.log(error);
  }
}

