const app = new Vue({
  el: '#app',
  data: {
    books: [
      { id: 1, name: "《算法导论》", publish_date: "2006-9", price: 85.00, purchase_quantity: 1, show: true },
      { id: 2, name: "《UNIX编程艺术》", publish_date: "2006-2", price: 59.00, purchase_quantity: 1, show: true },
      { id: 3, name: "《编程珠玑》", publish_date: "2008-10", price: 39.00, purchase_quantity: 1, show: true },
      { id: 4, name: "《代码大全》", publish_date: "2006-3", price: 128.00, purchase_quantity: 1, show: true }
    ]
  },
  methods: {
    minusQuantity: function(idx) {
      let book = this.books[idx];
      book.purchase_quantity > 0 ? book.purchase_quantity-- : null;
    },

    plusQuantity: function(idx) {
      this.books[idx].purchase_quantity++;
    },

    remove: function(idx) {
      this.books[idx].show = false;
    }
  },

  computed: {
    totalPrice: function() {
      return this.books
        .filter(t => t.show)
        .map(t => t.price * t.purchase_quantity)
        .reduce((prev, curr) => prev + curr, 0);
    }
  }
})