import { ref, onMounted } from "vue";
import axios from "axios";

export default function useFetch(url) {
  const data = ref([]);
  const error = ref(null);
  const isLoading = ref(false); 

  const fetchData = async () => {
    isLoading.value = true;

    try {
      const response = await axios.get(url);
      data.value = response.data.data;
    } catch (error) {
      console.log(error);
      error.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchData);

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
}
