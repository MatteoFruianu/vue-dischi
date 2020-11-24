

const app = new Vue ({

   el: '#app',

   data: {

    cds: [],

    actualGenre: 'all'

   },


   created() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
  .then(response => {
    // handle success
    this.cds = response.data.response;

  })
  .catch(error => {
    // handle error
    console.log(error);
  })
   },

   methods: {
     filterGenre() {

      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(response => {
        // handle success
        let cdList = response.data.response;

        if (this.actualGenre !== 'all') {

          cdList = cdList.filter( cd => cd.genre.toLowerCase() === this.actualGenre );
        }

        this.cds = cdList;
         
    
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
        
     }
   }


})