<template>
    <div>
        <h2>ok</h2>
    </div>
</template>
<script setup>

const route = useRoute();
// console.log(route.params.id);
// console.log(products)
const { data: product, pending ,error, refresh} = await useFetch(
  `http://localhost:4000/api/users/`,{query:{prov:'ยะลา'}}
);
console.log(product);

</script>
<style scoped>
</style>