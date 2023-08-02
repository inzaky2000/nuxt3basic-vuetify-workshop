<template>
  <div>
    <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
      <template v-slot:title>
        This is a title
      </template>
      <v-card-text>
        This is content
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" color="teal-accent-4">
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>