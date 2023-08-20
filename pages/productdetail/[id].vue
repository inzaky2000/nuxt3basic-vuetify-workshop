<script setup lang="ts">
// อ่าน id ที่ส่งมา
const route = useRoute();
console.log(route.params._id)

// อ่านข้อมูลจาก API ด้วย useFetch
// console.log(products)
const { data: products, pending } = await useFetch(
  `http://localhost:4000/api/users/${route.params.id}`
);

useHead({
  title: `${product.value.topic}`,
  meta: [
    {
      name: "keywords",
      content: `${product.value.topic}, Nuxt 3, Backend`,
    },
    {
      name: "Description",
      content: `${product.value.topic} บล็อก Nuxt 3,  IT Genius Engineering`,
    },
  ],
});
</script>

<template>
  <div class="mb-5">
    <div v-if="!pending">
      <div class="wrapper">
        <v-row class="mt-13" justify="center" v-if="!pending">
          <v-col
            cols="10"
            md="6"
            lg="4"
            v-for="(product, index) in products"
            :key="index"
          >นักเรียนศูนย์ฝึกอาชีพพระราชทาน
          </v-col>
        </v-row>
      </div>

      <ClientOnly>
        <v-container>
          <img :src="product.img" :alt="product.topic" class="w-100" />
          <h3 class="my-4">{{ product.detail }}</h3>
          <p class="my-4">{{ product.created_at }}</p>
          <a :href="product.img" target="_blank">อ่านเพิ่มเติม</a>
        </v-container>
      </ClientOnly>
    </div>
    <div class="text-center py-10" v-else>Loading...</div>
  </div>
</template>

<style scoped>
.ui-title {
  font-size: 32px;
}

.font-18 {
  font-size: 18px;
}

.wrapper {
  background: #2196f3;
  padding: 40px 0 20px;
  min-height: 250px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.blog-card {
  transition: 0.2s ease-in;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.blog-title {
  color: #263238 !important;
  line-height: 22px;
  font-weight: bold;
}

.blog-title:hover {
  color: #607df9 !important;
}
</style>