<template>
  <div class="employee-card-container">
    <!-- Loop through the displayedEmployees and render a ProfileCard component for each employee -->
    <ProfileCard
      v-for="employee in displayedEmployees"
      :key="employee.id"
      :employee="employee"
    />
    <!-- Show loading message if data is being loaded -->
    <div v-if="isLoading">Loading...</div>
    <!-- Show error message if there is an error -->
    <div v-if="error">{{ error }}</div>
  </div>
  <div class="pagination-nav">
    <button @click="previousPage" :disabled="currentPage === 1 || isLoading">
      Previous
    </button>
    <!-- Display the current page number -->
    <button class="current-page">
      {{ currentPage }}
    </button>
    <!-- It calls nextPage method on click and is disabled if on the last page or if data is loading -->
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages || isLoading"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import useFetch from "../composables/useFetch";
import ProfileCard from "./ProfileCard.vue";

// define the URLs for fetching employee data from page 1 and page 2
const URL_Page1 = "https://reqres.in/api/users?page=1";
const URL_Page2 = "https://reqres.in/api/users?page=2";

const currentPage = ref(1); // Current page number, starts at 1
const employeesPerPage = 6; // Number of employees to show per page

// useFetch composable to fetch data for page 1
const { data: employeesPage1, error: errorPage1, isLoading: isLoadingPage1, fetchData: fetchDataPage1 } = useFetch(URL_Page1);

// useFetch composable to fetch data for page 2
const { data: employeesPage2, error: errorPage2, isLoading: isLoadingPage2, fetchData: fetchDataPage2 } = useFetch(URL_Page2);

// combined loading states
const isLoading = computed(() => isLoadingPage1.value || isLoadingPage2.value);

const employees = ref([]); // combined employees array
const error = ref(null); // combined error state

// function to fetch employees data from both pages
const fetchEmployees = async () => {
  try {
    // Fetch data from both pages at the same time
    await Promise.all([fetchDataPage1(), fetchDataPage2()]);
    
    // Combine data from both pages into a single array
    employees.value = [...employeesPage1.value, ...employeesPage2.value];
    
    // Combine errors from both fetch operations, if any
    error.value = errorPage1.value || errorPage2.value;
  } catch (err) {
    
    error.value = "Failed to fetch data.";
  }
};

// Calculate the total number of pages based on the number of employees and employees per page
const totalPages = computed(() => Math.ceil(employees.value.length / employeesPerPage));

// calculate the employees to be displayed on the current page
const displayedEmployees = computed(() => {
  const startIndex = (currentPage.value - 1) * employeesPerPage; 
  const endIndex = startIndex + employeesPerPage; 
  return employees.value.slice(startIndex, endIndex); // Return the sliced array for the current page
});

// func go to the previous page
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--; // decreasing the currentPage value by 1
  }
};

// func go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++; // increasing the currentPage value by 1
  }
};

// Fetch employees data when the component is mounted
onMounted(fetchEmployees);
</script>

<style scoped>
.employee-card-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(270px, 1fr)
  ); /* Define grid columns layout */
  gap: 15px;
}

.pagination-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 2rem auto; /* Center the pagination and add vertical margin */
}

.pagination-nav button {
  color: black;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.pagination-nav .current-page {
  background-color: #5332ed;
  color: white;
}
</style>
