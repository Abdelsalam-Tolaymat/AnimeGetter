<template>
    <div class="search-dropdown-result" v-for="anime in searchResults" :key="anime">
      <a :href="hrefLinkAnime(anime.mal_id)">
      <div class="search-dropdown-entire-container" @click="pushing(anime.mal_id)">
        <div class="search-dropdown-result-image" :style="{ backgroundImage: 'url(' + anime.images.webp.image_url + ')' }" @click="pushing(anime.mal_id)"></div>       
        <div class="search-dropdown-result-data-container">
            <div class="search-dropdown-result-title">{{anime.title}}</div>
            <div class="search-dropdown-result-info">Episodes: {{anime.episodes}} ({{anime.type}})</div>
            <div class="search-dropdown-result-info">Score: {{anime.score}}</div>
            <div class="search-dropdown-result-info">Aired: {{dateForSearch(anime.aired.from)}} to <br> {{dateForSearch(anime.aired.to)}}</div>
        </div>
      </div>
      </a>
    </div>   
</template>

<script>
// import axios from 'axios'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'
import config from "../assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation

export default {
  name: 'SearchInfo',
  watch: {
      '$route': 'animeSearch'
  },
  
  components: {

  },
    data(){
    return{
        searchResults:null,
        apiIP: ipServer

    }
  },
  mixins:[AnimeInfo_mixins],
  mounted(){
      this.animeSearch()
  },
  methods:{

     async animeSearch(){
        let searchQuery = this.$route.query.q
        if(searchQuery != ""){
            //console.log('searching', 'search q = : ' + searchQuery)

            const request = await fetch(`/api/getAnimeSearch?q=${searchQuery}&sfw=0`)
            const response = await request.json()
            this.searchResults = response.data
      }
     
    },
    dateForSearch(dateFromAPI){
      const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
      let blabla = new Date(dateFromAPI).toLocaleDateString('en-GB', options).replaceAll('/', '-')
      return blabla
    }
  }
}
</script>