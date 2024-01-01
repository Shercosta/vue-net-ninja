const app = Vue.createApp({
  // data, func
  //   template: "<h2>I am the Template</h2>",
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
});

app.mount("#app");
