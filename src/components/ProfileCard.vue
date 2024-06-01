<template>
  <div class="employee-card">
    <div class="employee-image">
      <img :src="employee.avatar" :alt="employee.name" srcset="" />
    </div>
    <div class="employee-details">
      <h3>{{ employee.first_name }} {{ employee.last_name }}</h3>
      <p><a :href="'mailto:' + employee.email">Contact</a></p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  employee: {
    // to ensure the correct type and the prop is required/provided for this component
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.employee-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f0f2;
  border-radius: 10px;
  padding: 20px;
}
@media (min-width: 768px) {
}

.employee-image img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.employee-details {
  text-align: center;
  place-items: center;
}

h3 {
  margin: 20px 0;
  font-size: 1rem;
  font-weight: bold;
}

p {
  margin: 10px;
}
</style>
