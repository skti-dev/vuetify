<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="success" plain v-on="on" v-bind="attrs">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field prepend-icon="mdi-folder" :rules="inputRules" label="Title" v-model="title"></v-text-field>
          <v-textarea prepend-icon="mdi-pencil" label="Informations about the project" v-model="content" :rules="inputRules"></v-textarea>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :rules="inputRules" :value="formattedDate" label="Due date" prepend-icon="mdi-calendar" v-bind="attrs" v-on="on" readonly></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn plain class="success mx-0 mt-3" @click="submit" :loading="loading"> Add project </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import format from "date-fns/format"

import db from "@/fb"

export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: null,
      inputRules: [
        value => value.length >= 2 || "Minimum length is 2 characters"
      ],
      loading: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        this.loading = true

        const project = {
          title: this.title,
          content: this.content,
          due: this.formattedDate,
          person: "The Net Ninja",
          status: "ongoing"
        }

        // Async task 
        db.collection("projects").add(project)
          .then(() => {
            this.loading = false
            this.dialog = false

            this.$emit("project-added")
          })
      }
    }
  },
  computed: {
    formattedDate() {
      let aux = ""

      if(this.due){
        aux = this.due.split("-")
        aux = new Date(aux[0], (aux[1] - 1), aux[2])
      }

      return this.due ? format(aux, "Do MMM yyyy") : ""
    }
  }
}
</script>
