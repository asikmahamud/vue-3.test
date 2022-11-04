import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
 state: () => ({
   produtcs: [
    {
      id: 1,
      name: "Red Car",
      price: 40,
      Discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae animi doloremque in unde ea magni officiis neque. Facilis corrupti id asperiores odio repellendus similique aperiam eveniet dolores corporis cumque.",
      image: "/image/car-1.jpg"
    },
    {
      id: 2,
      name: "White Car",
      price: 50,
      Discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae animi doloremque in unde ea magni officiis neque. Facilis corrupti id asperiores odio repellendus similique aperiam eveniet dolores corporis cumque.",
      image: "/image/car-2.jpg"
    },
    {
      id: 3,
      name: "blue Car",
      price: 60,
      Discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae animi doloremque in unde ea magni officiis neque. Facilis corrupti id asperiores odio repellendus similique aperiam eveniet dolores corporis cumque.",
      image: "/image/car-3.jpg"
    },
    {
      id: 4,
      name: "Yellow Car",
      price: 70,
      Discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae animi doloremque in unde ea magni officiis neque. Facilis corrupti id asperiores odio repellendus similique aperiam eveniet dolores corporis cumque.",
      image: "/image/car-4.jpg"
    },
   ],
   cart: []
 }),

 actions: {
  addCart(product){
    this.cart.push(product)
  },
  increaseCart(id) {
    let itemIndex = this.cart.findIndex(item => item.id == id)
    this.cart[itemIndex].quantity++
   },
   decreaseCart(id) {
    let itemIndex = this.cart.findIndex(item => item.id == id)
    if (this.cart[itemIndex].quantity <= 1){
      this.removeCart(id)
    }else{
      this.cart[itemIndex].quantity--
    }
   },
   
   removeCart(id) {
    let itemIndex = this.cart.findIndex(item => item.id == id)
    this.cart.splice(itemIndex, 1)
   }
 },

 
})
