
const LIST = [
  {
    id: 1,
    nome: 'Toy Story',
    avatar: 'images/starwars-images/7JzCjrJupKFpvFUQITM297p3dRd.webp'
  },

  {
    id: 2,
    nome: 'Titanic',
    avatar: 'images/starwars-images/7Laa16fyIn0IoK7D0XnBzbIxC-2lwK3Nhr0sseg7qgjw9hN2UrBHvxfsTPfy0bpE7ElWq-_D0FNi3PdELJGsesRPNb3-Z3YByZoRFSGQKlD3xGmA2_Lbg2hFwDRFg1t2Kz-w2rKCiwmNxwhlR791k9DOERqNt584h98SPkdffTU4jD43AWb_kVrPKwuythmM.jpg'
  },

  {
    id: 3,
    nome: 'Todo Mundo em Pânico 6',
    avatar: 'images/starwars-images/9zg6wDx2EFeWYp5vW5tRkZoeXqK.webp'
  },

  {
    id: 4,
    nome: 'Michael',
    avatar: 'images/starwars-images/gXh43JopeO8BlA661BvlkR6yeqs.webp'
  },

  {
    id: 5,
    nome: 'Mortal Kombat',
    avatar: 'images/starwars-images/jITMzeKiubYqcV6OJY0L3pVgLu4.webp'
  },

  {
    id: 6,
    nome: 'Águas Mortais',
    avatar: 'images/starwars-images/qYiygmWT9Xtl2vNhYDI7zV7FgPi.webp'
  },

  {
    id: 7,
    nome: 'Senhor dos Anéis',
    avatar: 'images/starwars-images/S2PjPmCb9IT8U-M1ZJgW0M4QQsVMfhUzwCyw70apbj-gFuhGs5xRSEysyjDxDHoPLqS95L3RaI9IwrvRA3ZzfEO36FuJVeNc6LEVaaX-NkSxPKfgidJOhIcDYl7uwREDbYxm0FVysFu1gn1LIMHiVsNgT-KZza9sbjsKyC-I3Wt-Qz4E9iYvUyLfZPKjhjNR.jpg'
  },

  {
    id: 8,
    nome: 'Harry Potter e Pedra Filosofal',
    avatar: 'images/starwars-images/ychKy--3xUAQbLM23z9mD0DTTosHTpRGrrcecSwNzH_do3Gjgyzh5-kqOZWgOw7Mz2eh1S8DMINqbn_whZOZ5nJYU5ml4df-uOis0RtE1V6t9ZmV7G8KMsu-8FGbzQ_oQ9Llvdvx9fR_YiGRF1UnkLJmIXKPeNpG640VaQJ8ZP08Wbske8nydvBGhEvnghU_.jpg'
  },

  {
    id: 9,
    nome: 'A Casa do Dragão',
    avatar: 'images/starwars-images/96NUnE3LTKIjod4g3cYQiZTzbl0.webp'
  },

  {
    id: 10,
    nome: 'A Odisseia',
    avatar: 'images/starwars-images/m0ehGErq8GTLK4WZxaq9QLGAR3u.webp'
  },
]

const App = new Vue({
  el: '#app',
  data: {
    title: 'Catálogo de Filmes', 
    userName: 'Adriana',
    characters: LIST,
    searchName: ''
  },

  methods: {
    like(userName) {
      alert(`O filme ${userName} recebeu um Like`)
    },

    remove(id) {
      const list = this.characters

      const result = list.filter(item => {
        return item.id !== id
      })

      this.characters = result
    },

    search() {

      if (this .searchName === '') {
        return alert('O campo de busca é obrigatório.')
      }

      const list = this.characters

      const result = list.filter(item => {
        return item.nome === this.searchName
      })

      if (result <= 0) {
        alert('Nenhum resgitro encontrado.')
      } 
      else {
        this.characters = result
      }
    }
  }
})  