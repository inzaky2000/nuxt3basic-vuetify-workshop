<script lang="ts" setup>
useHead({
  title: "ที่มา",
  meta: [
    {
      name: "keywords",
      content: "ที่มา, Nuxt 3, Backend",
    },
    {
      name: "Description",
      content: "ที่มา Nuxt 3,  IT Genius Engineering",
    },
  ],
});
// อ่านข้อมูลจาก API ด้วย useFetch
// const { data: products, pending } = await useFetch('https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news')
</script>
<template>
  <v-container class="bg-surface-variant">
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <v-sheet class="pa-2 ma-2">
          <div class="mt-5">
            <h1 class="mt-16">ความเป็นมา</h1>
            <p>
              ศอ.บต.
              ร่วมกับหน่วยงานในพื้นที่ดำเนินโครงการฝึกอาชีพในศูนย์ฝึกอาชีพพระราชทานจังหวัดชายแดนภาคใต้
              เพื่อเปิดโอกาสให้กลุ่มเปราะบางที่ด้อยโอกาส อยู่นอกระบบการศึกษา
              และมีฐานะยากจน เข้ารับการฝึกอาชีพ เพื่อให้เกิดทักษะความรู้
              เสริมสร้างทักษะอาชีพได้ ยกระดับคุณภาพชีวิตให้กับกลุ่มเปราะบาง
              (คนยากจน ผู้พ้นโทษ ผู้พิการ (ที่สามารถฝึกงานได้))
              ในพื้นที่จังหวัดชายแดนภาคใต้ มีทักษะ มีอาชีพ มีรายได้
              สามารถเลี้ยงดูตนเอง และครอบครัวได้
            </p>
            <p>
              โดยเปิดฝึกตั้งแต่ พ.ศ. 2558 - ปัจจุบัน ดำเนินการฝึกอาชีพปีละ 2
              รุ่น มีผู้สำเร็จการฝึกอาชีพ รวมทั้งสิ้น 1,326 ราย
              มีผู้สำเร็จการฝึกอาชีพและมีงานทำ จำนวน 570 ราย คิดเป็นร้อยละ 42.99
              และมีผู้สำเร็จการฝึกอาชีพที่ว่างงาน จำนวน 756 ราย คิดเป็นร้อยละ
              57.01 ทั้งนี้
              ที่มาของข้อมูลการมีงานทำจะเป็นข้อมูลภายหลังเสร็จสิ้นการฝึกอบรม 1
              เดือน และไม่มีการติดตามผลการมีงานทำ
              และคุณภาพชีวิตของสำเร็จการฝึกภายหลังเสร็จสิ้นการดำเนินโครงการ
              ทำให้ไม่มีฐานข้อมูลผู้ที่สำเร็จการฝึกอาชีพที่ยังว่างงานว่ามีการเปลี่ยนสถานภาพเป็นผู้ที่มีงานทำหรือไม่
              อีกทั้งผู้สำเร็จการฝึกอาชีพที่มีงานทำยังคงสถานภาพเป็นผู้ที่งานทำหรือไม่อย่างไร
              เพื่อนำข้อมูลดังกล่าวนำเสนอผู้บริหารเพื่อหาแนวทางในการให้ความช่วยเหลือดังกล่าวได้
            </p>
            <p>
              จากสภาพปัญหาดังกล่าวข้างต้น กปค.
              จึงมีแนวทางเพื่อแก้ไขปัญหาดังกล่าว
              โดยการจัดทำระบบฐานข้อมูลสารสนเทศสำหรับผู้ที่สำเร็จการฝึกอาชีพในศูนย์ฝึกอาชีพพระราชทานจังหวัดชายแดนภาคใต้
              ตั้งแต่ พ.ศ. 2558 จนถึงปัจจุบัน
              เป็นระบบฐานข้อมูลของผู้เข้ารับการฝึกอาชีพแบบเบ็ดเสร็จ (One Stop
              Data) ด้วยระบบออนไลน์ เพื่อเป็นฐานข้อมูล Data center
              สำหรับผู้ประกอบการในการจ้างงาน และเปิดโอกาสให้ผู้ประกอบการ
              และหน่วยงานทั้งภาครัฐและภาคเอกชนในการที่จะใช้ฐานข้อมูลดังกล่าวเพื่อช่วยเหลือผู้สำเร็จการฝึกอาชีพที่ยังงานได้มีอาชีพต่อไป
            </p>
          </div>
        </v-sheet>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <div class="mt-5">
          <h1 class="mt-16">วัตถุประสงค์</h1>
          <P>
            <li>
              เพื่อให้มีข้อมูลและสารสนเทศเชื่อมโยงสอดคล้องกันอย่างเป็นระบบ
              ซึ่งจะช่วยให้ผู้บริหารมีข้อมูลและสารสนเทศมีมาตรฐานใช้ในการบริหารการติดตามกลุ่มเปราะบาง
            </li>
            <li>
              การวิเคราะห์ผลและการตรวจสอบผลการดำเนินการ
              โครงการและช่วยสนับสนุนการตัดสินใจ
            </li>
            <li>
              เพื่อให้มีข้อมูลสารสนเทศสนับสนุนการปฏิบัติงาน
              รวมถึงสถานประกอบกิจการที่จะนำข้อมูลไปใช้ประโยชน์
            </li>
          </P>
          <h1 class="mt-16">ประโยชน์ที่คาดว่าจะเกิดต่อหน่วยงาน</h1>
          <P>
            <li>
              สามารถติดต่อให้ความช่วยเหลือกับกลุ่มเปราะบางอย่างใกล้ชิด และร่วมเป็นเครือข่ายของหน่วยงานของ ศอ.บต.ในพื้นที่ในระยะยาว
            </li>
          </P>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
