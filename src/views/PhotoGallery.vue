<!-- <template>
<div class="body">
    <p><img id="largePhoto" src="../assets/Photo_PhotoGallery/photoGallery_2.png" alt="large Photo"></p>
    <div id="carousel_of_images" class="carousel_of_images">
        <button class="arrow prev">&lt;</button>
        <div class="gallery">
            <ul id="gallery">
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_1.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_2.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_3.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_4.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_5.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_6.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_7.png"></li>
                <li><img src="../assets/Photo_PhotoGallery/photoGallery_8.png"></li>
            </ul>
        </div>
        <button class="arrow next">></button>
    </div>
</div>
</template> -->

<template>
    <div class="body">
        <p><img id="largePhoto" :src="large.src" alt="large Photo"></p>
        <div id="carousel_of_images" class="carousel_of_images">
            <button class="arrow prev">&lt;</button>
            <div class="gallery">
                <ul id="gallery" ref="ul">
                    <li v-for="el in elements" :key = "el.id"><img :src="el.src"></li>
                </ul>
            </div>
            <button class="arrow next" >&gt;</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PhotoGallery',
    data() {
        return {
            elements: [],
            large: {src: '../assets/Photo_PhotoGallery/photoGallery_2.png'}
        }
    },
    methods: {
        
    },
    created() {
        this.elements = [
            {src: '../assets/Photo_PhotoGallery/photoGallery_1.png'},
            {src: '../assets/Photo_PhotoGallery/photoGallery_2.png'}, 
            {src: '../assets/Photo_PhotoGallery/photoGallery_3.png'}, 
            {src: '../assets/Photo_PhotoGallery/photoGallery_4.png'}, 
            {src: '../assets/Photo_PhotoGallery/photoGallery_5.png'}, 
            {src: '../assets/Photo_PhotoGallery/photoGallery_6.png'}, 
            {src: '../assets/Photo_PhotoGallery/photoGallery_7.png'}, 
            {src: '../assets/Photo_PhotoGallery/photoGallery_8.png'}
        ]
    }
}
</script>


<style scoped>
    .body {
        margin: 0;
        padding-top: 145px;
        padding-left: 0;
        padding-right: 0;
        background-color: #333232;
    }

    #largePhoto {
        width: 590px;
        height: 500px;
        border: 20px solid #D2B48C;
        border-radius: 24px;
        vertical-align: top;
    }
    p {
        margin: 0;
        text-align: center;
    }


    .carousel_of_images {
        position: relative;
        margin: auto;
        padding: 20px 87px 123px 87px;
        width: 1084px;
    }
    .carousel_of_images img {
        width: 197px;
        height: 197px;
        display: block;
    }

    .arrow {
        display: block;
        position: absolute;
        top: 85px;
        background-color: #D2B48C;
        border-radius: 16px;
        font-size: 55px;
        color: #333232;
        padding: 0 17px 0 17px;
        border: 0;
    }
    .arrow:hover {
        cursor: pointer;
        background-color: #615B4B;
    }
    .prev {
        left: 0;
    }
    .next {
        right: 0px;
    }
    .gallery {
        width: 1085px;
        overflow: hidden;
        margin: 0;
    }
    .gallery ul {
        width: 9999px;
        height: 197px;
        margin: 0;
        padding: 0;
        list-style: none;
        transition: margin-left 250ms;
        font-size: 0;
    }
    .gallery li {
        display: inline-block;
        margin: 0 10px 0 10px;
    }
</style>