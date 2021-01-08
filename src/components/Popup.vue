<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="success" plain v-on="on" v-bind="attrs">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field prepend-icon="mdi-folder" label="Title" v-model="title"></v-text-field>
          <v-textarea prepend-icon="mdi-pencil" label="Informations about the project" v-model="content"></v-textarea>
          <v-btn plain class="success mx-0 mt-3" @click="submit"> Add project </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  }
}
</script>
