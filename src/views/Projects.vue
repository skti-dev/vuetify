<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
          <v-expansion-panel-header> {{ project.title }} </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: "Design a new website", person: "The Net Ninja",  due: "1st Jan 2019", status: "ongoing", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus, corrupti delectus dolorum quibusdam ipsum voluptas pariatur tempore quaerat, sit earum consectetur eligendi necessitatibus voluptate praesentium quod! Qui, nihil ratione." },
        { title: "Design a new website 2", person: "The Net Ninja",  due: "1st Jan 2019", status: "ongoing", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus, corrupti delectus dolorum quibusdam ipsum voluptas pariatur tempore quaerat, sit earum consectetur eligendi necessitatibus voluptate praesentium quod! Qui, nihil ratione." },
        { title: "Design a new website 3", person: "The Net Ninja",  due: "1st Jan 2019", status: "ongoing", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus, corrupti delectus dolorum quibusdam ipsum voluptas pariatur tempore quaerat, sit earum consectetur eligendi necessitatibus voluptate praesentium quod! Qui, nihil ratione." },
        { title: "Code up the homepage", person: "Chun Li",  due: "10th Jan 2019", status: "complete", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus, corrupti delectus dolorum quibusdam ipsum voluptas pariatur tempore quaerat, sit earum consectetur eligendi necessitatibus voluptate praesentium quod! Qui, nihil ratione." },
        { title: "Design video thumbnails", person: "Ryu",  due: "20th Dec 2018", status: "complete", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus, corrupti delectus dolorum quibusdam ipsum voluptas pariatur tempore quaerat, sit earum consectetur eligendi necessitatibus voluptate praesentium quod! Qui, nihil ratione." },
        { title: "Create a community forum", person: "Gouken",  due: "20th Oct 2018", status: "overdue", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus, corrupti delectus dolorum quibusdam ipsum voluptas pariatur tempore quaerat, sit earum consectetur eligendi necessitatibus voluptate praesentium quod! Qui, nihil ratione." },
      ]
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person == "The Net Ninja"
      })
    }
  }
}
</script>

<style>

</style>