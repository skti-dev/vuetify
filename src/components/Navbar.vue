<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain color="grey" v-bind="attrs" v-on="on">
            <v-icon left>mdi-arrow-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
            <v-list-item-title> {{ link.text }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="The Net Ninja's avatar">
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="my-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ `mdi-${link.icon}` }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text"> {{ link.text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>
<script>
import Popup from "./Popup"
export default {
  components: { Popup },
  data(){
    return{
      drawer: false,
      links: [
        { icon: "view-dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "account-group", text: "Team", route: "/team" }
      ]
    }
  }
}
</script>
