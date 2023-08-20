<script lang="ts" setup>
    useHead({
        title: 'ข้อมูล',
        meta: [
            { 
            name: 'keywords', 
            content: 'เกี่ยวกับเรา, Nuxt 3, Backend'
            },
            {
            name: 'Description',
            content: 'เกี่ยวกับเรา Nuxt 3,  IT Genius Engineering'
            }
        ]
    })
    const { data: data } = await useFetch('http://localhost:4000/api/users')
    // console.log(data)
</script>

<template>
  <div class="wrapper">
        <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
            <h2 class="ui-title font-weight-bold text-white mb-4"></h2>
            <p class="text-white">
                <v-table theme="dark"  >
                    <thead>
                        <tr>
                            <th class="text-center text-h5">
                                id
                            </th>
                            <th class="text-center text-h5">
                                name
                            </th>
                            <th class="text-center text-h5">
                                ที่อยู่
                            </th>
                            <th class="text-center text-h5">
                                เบอร์โทร
                            </th>
                            <th class="text-center text-h5">
                                e-mail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in data.slice()" :key="index">
                            <td >{{ user.id }}</td>
                            <td class="text-left">{{ user.fullname }}</td>
                            <td class="text-left">{{ user.addr }}</td>
                            <td>{{ user.tel }}</td>
                            <td>{{ user.email }}</td>           
                        </tr>
                    </tbody>
                </v-table>
                <!-- <ul v-for = "(user, index) in data.slice()">                    
                </ul> -->
            </p>
            </div>
        </v-col>
        </v-row>
    </div>
</template>

<style scoped>
    .ui-title {
        font-size: 32px;
    }

    .font-18 {
        font-size: 18px;
    }
    
    .icon-round{
        background-color: blueviolet;
        color: #fff;
        display: inline-block;
        padding:30px 20px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 20px 0px;
    }

    .bg-light-info{
        font-size: 40px;
    }

    .wrapper {
        background: #2196F3;
        padding: 40px 0 20px;
        min-height: 400px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .formbanner1-component {
      background-color: #e9f3f8;
    }

    .formbanner1-title {
      font-size: 48px;
      line-height: 1;
      letter-spacing: -1px;
      margin: 20px 0 15px;
    }

</style>