<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">

      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small plain color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small plain color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card class="mb-3" v-for="(project, index) in projects" :key="index">
        <v-layout wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="d-flex justify-end">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

import db from "@/fb"

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1 )
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if(change.type === "added"){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>
  .project.complete {
    border-left: 4px solid #3CD1C2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }

  .v-chip.complete{
    background: #3CD1C2!important
  }
  .v-chip.ongoing{
    background: orange!important
  }
  .v-chip.overdue{
    background: tomato!important
  }
</style>

<!-- Text & Colours -->
<!-- <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero modi illo praesentium ducimus facere consequatur inventore ea quibusdam dolore rerum asperiores eligendi beatae adipisci reiciendis, explicabo harum rem suscipit labore!</p>
<p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt reiciendis libero cumque, impedit nobis deleniti veritatis odio excepturi dolores fugit facere placeat iusto ad eaque temporibus possimus voluptas odit.</p>
<h1 class="display-4">Massive Display</h1>
<h4 class="display-1">Smaller Display</h4>
<p class="headline text-capitalize">This is a headline</p>
<p class="subheading font-weight-bold">This is a subheading</p>
<p class="caption">This is a caption</p> -->
<!-- Button & Icons -->
<!-- <v-btn class="pink white--text ml-2"> Click Me </v-btn>

<v-btn class="mx-2" color="pink" dark depressed> Click Me </v-btn>

<v-btn plain color="pink"> Click Me </v-btn>

<v-btn depressed class="pink white--text mx-2">
  <v-icon left>mdi-email</v-icon>
  <span>Email Me</span>
</v-btn>

<v-btn depressed small class="pink white--text">
  <v-icon left small>mdi-email</v-icon>
  <span>Email Me</span>
</v-btn>

<v-btn depressed large class="pink white--text mx-2">
  <span>Email Me</span>
  <v-icon right large>mdi-email</v-icon>
</v-btn>

<v-btn fab depressed small dark color="purple">
  <v-icon>mdi-bomb</v-icon>
</v-btn> -->

<!-- Breakpoints & Visibility -->
<!-- <v-btn class="hidden-md-and-down">Click Me</v-btn> -->
<!-- <v-btn class="hidden-md-and-up">Click Me</v-btn> -->
<!-- <v-btn class="hidden-sm-only">click me</v-btn> -->

<!-- Grid System -->
<!-- 
<v-layout wrap> column 
  <v-flex xs12 md6>
    <v-btn outlined block color="primary">1</v-btn>
  </v-flex>
  <v-flex xs4 md2>
    <v-btn outlined block color="primary">2</v-btn>
  </v-flex>
  <v-flex xs4 md2>
    <v-btn outlined block color="primary">3</v-btn>
  </v-flex>
  <v-flex xs4 md2>
    <v-btn outlined block color="primary">4</v-btn>
  </v-flex>
</v-layout>
<v-layout justify-space-around>
  <v-flex xs4 md3>
    <v-btn outlined block color="success">A</v-btn>
  </v-flex>
  <v-flex xs4 md3>
    <v-btn outlined block color="success">B</v-btn>
  </v-flex>
</v-layout> 
-->