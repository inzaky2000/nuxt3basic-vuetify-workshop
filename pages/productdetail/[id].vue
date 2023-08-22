<script setup lang="ts">
definePageMeta({
  layout: "backend",
});

const route = useRoute();
// console.log(route.params.id);
// console.log(products)
const { data: product, pending } = await useFetch(
  `http://localhost:4000/api/users/${route.params.id}`
);
// console.log(product);

useHead({
  title: "ProductDetail",
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
  <v-card max-width="800" class="mx-auto">
    <!-- <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-container>
      <v-row dense>
          <v-col cols="12">
            <v-card color="#EEF5F9" theme="white">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5"> ประวัติส่วนตัว </v-card-title>
  
                  <v-card-subtitle>
                    <p>ชื่อ : {{ product.fullname }}</p>
                    <P>ปีเกิด : {{ product.dob }}</P>
                    <p>อายุ : {{ product.age }}</p>
                    <p>ส่วนสูง : {{ product.hight }}</p>
                    <p>น้ำหนัก : {{ product.weight }}</p>
                    <p class="mt-3 mb-2">ที่อยู่ : {{ product.addr }}</p>
                    
                  </v-card-subtitle>
  
                  <!-- <v-card-actions>
                    <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                  </v-card-actions> -->
                </div>
  
                <v-avatar class="ma-3" size="225" rounded="0">
                  <v-img :src="product.img"></v-img>
                  <!-- <v-img :src="product.img" alt="product" height="150" /> -->
                </v-avatar>
                <v-divider></v-divider>
              </div>
            </v-card>
          </v-col>


        <v-col cols="12">
            <v-card color="#EEF5F9" theme="white">
            <v-card-title class="text-h5"> ประสบการณ์การทำงาน </v-card-title>
                
            <v-card-subtitle>
                <p class="mb-3"> : {{ product.hist_work }}</p>
            </v-card-subtitle>

            <v-card-title class="text-h5"> จุดเด่นของตัวเอง </v-card-title>
                
                <v-card-subtitle>
                    <p class="mb-3"> : {{ product.strong }}</p>
                </v-card-subtitle>

                <v-card-title class="text-h5"> เป้าหมายการทำงาน </v-card-title>
                <v-card-subtitle>
                    <p class="mb-3"> : {{ product.goal }}</p>
                </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
            <v-card color="#EEF5F9" theme="white">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5 ">
                  ทักษะ และความสามารถ
                </v-card-title>

                <v-card-subtitle class="mb-3 ">
                  <p>ทักษะด้านคอมพิวเตอร์ [word] : {{ product.skill_word }}</p>
                  <p>ทักษะด้านคอมพิวเตอร์ [excel] : {{ product.skill_xls }}</p>
                  <p>
                    ทักษะด้านคอมพิวเตอร์ [powerpoint] : {{ product.skill_ppt }}
                  </p>
                  <p>ทักษะด้านภาษา [มาเลย์] : {{ product.skill_mus }}</p>
                  <p>ทักษะด้านภาษา [อาหรับ] : {{ product.skill_arb }}</p>
                  <p>ทักษะด้านภาษา [อังกฤษ] : {{ product.skill_eng }}</p>
                  <p>ทักษะด้านภาษา [จีน] : {{ product.skill_chi }}</p>
                </v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar>

            </div>
            <v-card-actions>
              <v-btn to="../backend/dashboard/" variant="text"> กลับหน้า Dashboard </v-btn>
              <v-spacer></v-spacer>
              <v-btn-group>
                <v-btn
          :ripple="false"
          height="72"
          min-width="164"
          color="primary"
        >
        แก้ไข
        </v-btn>
        <v-btn
          height="72"
          min-width="164"
          color="red"

        >
          ลบ
        </v-btn>
              </v-btn-group>
            </v-card-actions>
            
        </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-card>
</template>
<style scoped>
</style>