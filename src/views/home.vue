<template>
  <h1>My Game on Steam</h1>
  <ul>
    <li v-for="(post, id) in posts" :key="id">
      <h3>{{ post.title }}</h3> <p>{{ post.body }}</p>
    </li>
  </ul>
<div class="game">
  <router-link to="/game/batmanAC"><img src="batman.jpg"></router-link>
  <router-link to="/game/codeVein"><img src="codeVein.jpg"></router-link>
  <router-link to="/game/coffeeTalk"><img src="coffeeTalk.jpg"></router-link>
  <router-link to="/game/MGSV"><img src="MGSV.jpg"></router-link>
  <router-link to="/game/MHW"><img src="MHW.jpg"></router-link>
  <router-link to="/game/NNK"><img src="NNK.jpg"></router-link>
  <router-link to="/game/NNK2"><img src="NNK2.jpg"></router-link>
  <router-link to="/game/theWitcher3"><img src="theWitcher3.jpg"></router-link>
  <router-link to="/game/yakuza0"><img src="yakuza0.jpg"></router-link>
</div>
</template>

<script>
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBP9iqUpns3UFn17tytAFUa6qpQxSLjrhw",
  authDomain: "tesvue-8b95c.firebaseapp.com",
  projectId: "tesvue-8b95c",
  storageBucket: "tesvue-8b95c.appspot.com",
  messagingSenderId: "314403062989",
  appId: "1:314403062989:web:e8e3e5cf04d26da0c79584"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default {
  data(){
    return {
      posts:[]
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    async load(){
      try{
        const querySnapshot = await getDocs(collection(db, "post"))
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          this.posts.push(doc.data())
        })
      }
      catch(err){
        console.log(err.message)
      }
    }
  }
}
</script>
<style>
.game img{
  height: 175px;
  width: 400px;
}
.game{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>