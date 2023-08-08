<script setup lang="ts">

  definePageMeta({
    layout: "backend",
  })

  useHead({
    title: 'Product',
    meta: [
      { 
        name: 'keywords', 
        content: 'Product, Nuxt 3, Backend'
      },
      {
        name: 'Description',
        content: 'Product Nuxt 3,  IT Genius Engineering'
      }
    ]
  })
    // console.log(products)
    const { data: products,refresh } = await useFetch('http://localhost:4000/api/users')
    console.log(products)

</script>

<template>
  <div>
    <h1>ผู้ผ่านการฝึกอบรม ประจำปี 2566</h1>
    <div>
        <v-container>
          <v-row class="mt-13" justify="center">
            <v-col cols="12" md="6" lg="4" v-for="(product, index) in products" :key="index">
              <v-card elevation="0" class="blog-card overflow-hidden mb-5">
                <div class="position-relative mb-5">
                  <a href="#">
                    <v-img :src="product.img"
                      alt="blog"
                      class="blog-img"
                    />
                  </a>
                  <div class="date-badge bg-info-grediant">
                    อายุ <span>23</span>
                  </div>
                </div>
                <div class="pa-5">
                    <v-card-title>
                      {{ product.fullname }}
                    </v-card-title>
                  <p class="mt-5 mb-5">
                    ชื่อเล่น : {{ product.nickname }}
                  </p>
                  <p class="mt-5 mb-5">
                    ที่อยู่ : {{ product.addr }}
                  </p>
                  <p class="mt-10 mb-10">
                    Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                  </p>
                  <a
                    href="#"
                    class="
                      text-themecolor
                      linking
                      text-decoration-none
                      d-flex
                      align-center
                    "
                  >
                    อ่านต่อ  &nbsp; <i class="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped></style>