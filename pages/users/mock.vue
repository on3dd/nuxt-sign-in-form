<template>
  <v-layout justify-center align-center mt-16>
    <v-flex xs12 sm8 md6>
      <v-card class="mx-auto" rounded>
        <v-row justify="center" class="fill-height">
          <v-col class="py-md-0 flex-grow-0">
            <v-avatar class="profile" size="164" color="white" rounded>
              <v-img :src="user.image" />
            </v-avatar>
          </v-col>
          <v-col class="pa-0 pb-3 pt-md-3">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content class="text-center text-md-left">
                <v-list-item-title class="title">
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { getMockUser } from '@/mocks/user';

export default {
  async asyncData() {
    const user = await getMockUser();
    return { user };
  },
};
</script>

<style></style>
