const app = Vue.createApp({
  // data, func
  //   template: "<h2>I am the Template</h2>",
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
        },
        {
          title: "Jackcy Person",
          author: "Some author",
        },
        {
          title: "Spooderman",
          author: "Peron Madonna",
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
