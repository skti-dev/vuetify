import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconFont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: "#9652FF",
        success: "#3CD1C2",
        info: "#FFAA2C",
        error: "F83E70"
      }
    }
  }
});
