<script lang="ts" setup>
useHead({
  title: "หน้าหลัก",
  meta: [
    {
      name: "keywords",
      content: "หน้าหลัก, Nuxt 3, Backend",
    },
    {
      name: "Description",
      content: "หน้าหลัก Nuxt 3,  IT Genius Engineering",
    },
  ],
});
  const imageLayout = [
    { cols: 4 },
    {
      cols: 8,
      children: [{ cols: 12 }, { cols: 12 }],
    },
    { cols: 6 },
    { cols: 3 },
    { cols: 9 },
    { cols: 4 },
    { cols: 8 },
  ]
</script>

<template>
  <div class="banner-wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" md="7" lg="6" class="d-block d-lg-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold text-white">
              ค้นหาผู้ผ่านการฝึกอาชีพ <br />ในพื้นที่ใกล้เคียง
            </h1>
            <h4 class="banner-subtitle text-white font-weight-regular">
              สร้างงานในพื้นที่ด้วยการให้โอกาสแก่ผู้ผ่านการฝึกอาชีพจากโครงการศูนย์ฝึกอาชีพพระราชทาน
            </h4>
            <div>อำเภอ...</div>
            <div class="mt-8 pt-2">
              
              <v-btn
                color="success"
                class="btn-custom-lg"
                target="_blank"
                href="https://www.sbpac.go.th"
                elevation="0"
              >
                ค้นหา
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-img
            src="/images/landingpage/banner-img.png"
            alt="banner"
            class="heroimg mt-8"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
<!--section 2-->
<!-- <v-row>
  <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
      <v-col :cols="image.cols">
        <v-img
          :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
          cover
          height="100%"
        ></v-img>
      </v-col>

      <v-col v-if="image.children" cols="6" class="d-flex flex-column">
        <v-row>
          <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
            <v-img
              :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
              cover
              height="100%"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </template>
</v-row> -->
<v-container grid-list-xs>
  <v-row>
    <v-col>
      <div>
    <p class="text-high-emphasis">
      High-emphasis has an opacity of 87% in light theme and 100% in dark.
    </p>
    <p class="text-medium-emphasis">
      Medium-emphasis text and hint text have opacities of 60% in light theme and 70% in dark.
    </p>
    <p class="text-disabled">
      Disabled text has an opacity of 38% in light theme and 50% in dark.
    </p>
  </div>
    </v-col>
    <v-col>
      <div>
    <p class="text-high-emphasis">
      High-emphasis has an opacity of 87% in light theme and 100% in dark.
    </p>
    <p class="text-medium-emphasis">
      Medium-emphasis text and hint text have opacities of 60% in light theme and 70% in dark.
    </p>
    <p class="text-disabled">
      Disabled text has an opacity of 38% in light theme and 50% in dark.
    </p>
  </div>
    </v-col>
  </v-row>
</v-container>

  <!--end section 2-->
<!--section3-->
  <div class="banner1-component">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <v-chip small class="bg-dark" text-color="white">
              Creating Brands
            </v-chip>
            <h2
              class="banner1-title font-weight-bold text-uppercase text-white"
            >
              ความเป็นมาของโครงการ
            </h2>
            <p class="text-white op-8 font-weight-regular">
              ศอ.บต.
              ร่วมกับหน่วยงานในพื้นที่ดำเนินโครงการฝึกอาชีพในศูนย์ฝึกอาชีพพระราชทานจังหวัดชายแดนภาคใต้
              เพื่อเปิดโอกาสให้กลุ่มเปราะบางที่ด้อยโอกาส อยู่นอกระบบการศึกษา
              และมีฐานะยากจน เข้ารับการฝึกอาชีพ เพื่อให้เกิดทักษะความรู้
              เสริมสร้างทักษะอาชีพได้ ยกระดับคุณภาพชีวิตให้กับกลุ่มเปราะบาง
              (คนยากจน ผู้พ้นโทษ ผู้พิการ (ที่สามารถฝึกงานได้))
              ในพื้นที่จังหวัดชายแดนภาคใต้ มีทักษะ มีอาชีพ มีรายได้
              สามารถเลี้ยงดูตนเอง และครอบครัวได้
            </p>
            <div class="mt-16 pt-2">
              <v-btn
                nuxt
                large
                rounded
                to="/demo"
                class="btn-custom-md"
                depressed
                elevation="0"
              >
                อ่านต่อ>>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="5">
          <v-img src="/images/banner/banner1.jpg" alt="banner" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-subtitle {
  font-size: 21px;
}

.banner-wrapper {
  background: #2196f3;
  padding: 40px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.btn-custom-lg {
  font-size: 18px;
  padding: 10px 20px;
  height: auto;
}

.heroimg {
  animation: bounce 2s infinite;
}

@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}

@media (min-width: 1200px) {
  .banner-subtitle {
    margin-right: 150px;
  }
}

/* Banner1 */

.banner1-component {
  padding: 60px 0;
  background-color: #fdbfa8;
}

.banner1-title {
  font-size: 48px;
  line-height: 50px;
  margin: 20px 0 15px;
}

@media (max-width: 991px) {
  .banner1-component .banner1-title {
    font-size: 35px;
  }
}
</style>