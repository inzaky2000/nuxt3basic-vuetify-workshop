<script setup lang="ts">
definePageMeta({
  layout: "backend",
});
const { data: products } = await useFetch(`http://localhost:4000/api/users`);
// console.log(product)
useHead({
  title: `${products.id}`,
  meta: [
    {
      name: "keywords",
      content: "Product, Nuxt 3, Backend",
    },
    {
      name: "Description",
      content: "Product Nuxt 3,  IT Genius Engineering",
    },
  ],
});
</script>

<template>
  <div>
    <div>
      <v-container>
        <!-- <v-card flat> -->
        <v-toolbar flat>
          <v-toolbar-title class="text-info">
            ผู้ผ่านการฝึกอบรมประจำปี 2565
          </v-toolbar-title>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <!-- <v-card-text style="height: 200px"></v-card-text> -->
        <!-- </v-card> -->
        <!-- </v-card> -->

        <v-row class="mt-13" justify="center">
          <v-col
            cols="10"
            md="6"
            lg="4"
            v-for="(product, index) in products"
            :key="index"
          >
            <v-card
              elevation="0"
              class="blog-card overflow-hidden mb-5"
              :to="`/productdetail/${product._id}`"
            >
              <div class="position-relative mb-5">
                <!-- {{ product.id }} -->
                <a href="#">
                  <v-img
                    :src="product.img"
                    alt="product"
                    height="150"
                    class="bg-grey-lighten-2"
                  />
                </a>
                <div class="date-badge bg-info-grediant">
                  อายุ <span>{{ product.age }}</span>
                </div>
              </div>
              <div class="pa-3">
                <v-card-title> ชื่อ : {{ product.fullname }} </v-card-title>
                <v-card-subtitle> id : {{ product.id }} </v-card-subtitle>
                <p class="mt-3 mb-2">ชื่อเล่น : {{ product.nickname }}</p>
                <p class="mt-5 mb-5">ที่อยู่ : {{ product.addr }}</p>
                <p class="mt-10 mb-10">
                  เป้าหมายการทำงาน : " {{ product.goal }} "
                </p>
                <v-divider></v-divider>

                <div class="text-center">
                  สถานะภาพการทำงาน :
                  <!-- <v-chip
      class="ma-2"
      label
    >
      Label
    </v-chip> -->

                  <v-chip class="ma-2" color="pink" label text-color="white">
                    <v-icon start icon="mdi-label"></v-icon>
                    {{ product.status }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center py-10"></div>
      </v-container>
    </div>
  </div>
</template>

<style scoped></style>