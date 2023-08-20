<script setup lang="ts">

  definePageMeta({
    layout: "backend",
  })
    const { data: products } = await useFetch(`http://localhost:4000/api/users`)
    // console.log(product)
    useHead({
    title: `${products.id}`,
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
</script>

<template>
  <div>
    <h1>ผู้ผ่านการฝึกอบรม ประจำปี 2566</h1>
    <div>

      <ClientOnly>
        <v-container>
        <v-row class="mt-13" justify="center" >
          <v-col cols="10" md="6" lg="4" v-for="(product, index) in products" :key="index">
            <v-card elevation="0" class="blog-card overflow-hidden mb-5" :to="`/productdetail/${product._id}`">
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
                  <v-card-title>
                    ชื่อ : {{ product.fullname }}
                  </v-card-title>
                  <v-card-subtitle>
                    id :  {{ product.id }}
                  </v-card-subtitle>
                <p class="mt-3 mb-2">
                  ชื่อเล่น : {{ product.nickname }}
                </p>
                <p class="mt-5 mb-5">
                  ที่อยู่ : {{ product.addr }}
                </p>
                <p class="mt-10 mb-10">
                  เป้าหมายการทำงาน : " {{ product.goal }} "
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center py-10" ></div>
        </v-container>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped></style>