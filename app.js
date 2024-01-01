const app = Vue.createApp({
  // data, func
  //   template: "<h2>I am the Template</h2>",
  data() {
    return {
      url: "https://shercosta.github.io/Shercosta",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          isFav: true,
        },
        {
          title: "Jackcy Person",
          author: "Some author",
          isFav: false,
        },
        {
          title: "Spooderman",
          author: "Peron Madonna",
          isFav: true,
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
    toggleFav(book) {
      // this.title = "click";
      // console.log(book.title);
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
