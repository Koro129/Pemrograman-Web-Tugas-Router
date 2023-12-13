<template>
    <h2>{{this.datas.find(d => d.id == this.id).name}}</h2>
    <img :src="this.datas.find(d => d.id == this.id).img">
    <div class="data">
        <p>Description: </p>
        <p>{{this.datas.find(d => d.id == this.id).desc}}</p>
        <p>Release Date : {{this.datas.find(d => d.id == this.id).rilis}}</p>
        <p>Developer : {{this.datas.find(d => d.id == this.id).dev}}</p>
        <p>Publisher : {{this.datas.find(d => d.id == this.id).pub}}</p>
        <p>Buying Price : {{this.datas.find(d => d.id == this.id).price}}</p>
    </div>
    <button @click="$router.go(-1)">Back</button>
</template>
<style>
.data{
    margin: auto 300px;
    padding: 10px;
}
</style>
<script>
export default{
    data(){
        return {
            id:this.$route.params.id,
            datas:[
                {
                    id: "batmanAC",
                    name: "Buy Batman: Arkham Collection",
                    desc: "Batman: Arkham Collection brings you the definitive versions of Rocksteady's Arkham Trilogy games, including all post-launch content, in one complete collection.",
                    rilis: "29 Nov, 2018",
                    dev: "Rocksteady Studios",
                    pub: "Warner Bros. Interactive Entertainment",
                    price: "Rp 90.000",
                    img: "/batman.jpg"
                },
                {
                    id: "codeVein",
                    name: "CODE VEIN",
                    desc: "In the face of certain death, we rise. Team up and embark on a journey to the ends of hell to unlock your past and escape your living nightmare in CODE VEIN.",
                    rilis: "27 Sep, 2019",
                    dev: "Bandai Namco Studios",
                    pub: "Bandai Namco Entertainment",
                    price: "Rp 99.800",
                    img: "/codeVein.jpg"
                },
                {
                    id: "coffeeTalk",
                    name: "Coffee Talk",
                    desc: "Coffee Talk is a coffee brewing and heart-to-heart talking simulator about listening to fantasy-inspired modern peoples’ problems, and helping them by serving up a warm drink or two.",
                    rilis: "30 Jan, 2020",
                    dev: "Toge Productions",
                    pub: "Toge Productions",
                    price: "Rp 57.118",
                    img: "/coffeeTalk.jpg"
                },
                {
                    id: "MGSV",
                    name: "METAL GEAR SOLID V: THE PHANTOM PAIN",
                    desc: "Ushering in a new era for the METAL GEAR franchise with cutting-edge technology powered by the Fox Engine, METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
                    rilis: "1 Sep, 2015",
                    dev: "Konami Digital Entertainment",
                    pub: "Konami Digital Entertainment",
                    price: "Rp 58.999",
                    img: "/MGSV.jpg"
                },
                {
                   id: "MHW",
                   name: "Monster Hunter: World",
                   desc: "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
                   rilis: "9 Aug, 2018",
                   dev: "CAPCOM Co., Ltd.",
                   pub: "CAPCOM Co., Ltd.",
                   price: "Rp 167.499",
                   img: "/MHW.jpg"
                },
                {
                    id: "NNK",
                    name: "Ni no Kuni Wrath of the White Witch™ Remastered",
                    desc: "Journey back to the other world in Ni no Kuni: Wrath of the White Witch™ Remastered. LEVEL-5’s classic tale returns better than ever, with improved graphics and performance.",
                    rilis: "20 Sep, 2019",
                    dev: "LEVEL-5, QLOC",
                    pub: "Bandai Namco Entertainment",
                    price: "Rp 77.800",
                    img : "/NNK.jpg"
                },
                {
                    id: "NNK2",
                    name: "Ni no Kuni™ II: Revenant Kingdom",
                    desc: "Join the young king Evan as he sets out on an epic quest to found a new kingdom and, with the help of some new friends, unite his world, saving its people from a terrible evil",
                    rilis: "23 Mar, 2018",
                    dev: "LEVEL-5",
                    pub: "Bandai Namco Entertainment",
                    price: "Rp 102.000",
                    img : "/NNK2.jpg"
                },
                {
                    id: "theWitcher3",
                    name: "The Witcher 3: Wild Hunt - Game of the Year Edition",
                    desc: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
                    rilis: "18 May, 2015",
                    dev: "CD PROJEKT RED",
                    pub: "CD PROJEKT RED",
                    price: "Rp 89.800",
                    img : "/theWitcher3.jpg"
                },
                {
                    id: "yakuza0",
                    name: "Yakuza 0",
                    desc: "SEGA’s legendary Japanese series finally comes to PC. Fight like hell through Tokyo and Osaka as junior yakuza Kiryu and Majima. Take a front row seat to 1980s life in Japan in an experience unlike anything else in video gaming, with uncapped framerates and 4K resolutions. A legend is born.",
                    rilis: "1 Aug, 2018",
                    dev: "SEGA",
                    pub: "SEGA",
                    price: "Rp 65.000",
                    img : "/yakuza0.jpg"
                }

            ]
        }
    }
}
</script>