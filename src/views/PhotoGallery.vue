<template>
<div class="body">
    <p><img id="largePhoto" :src=getImgUrl(large.src) alt="large Photo"></p>
    <div id="carousel_of_images" class="carousel_of_images">
        <button class="arrow prev" @click = "prevPhoto">&lt;</button>
        <div class="gallery">
            <ul id="gallery" ref="ul" :style="{marginLeft: mar}">
                <li :key ="el.id" v-for="el in elements"  @click = "photoMagnification(el)">
                    <img :src=getImgUrl(el.src)>
                </li>
            </ul>
        </div>
        <button class="arrow next" @click = "nextPhoto">></button>
    </div>
</div>
</template>

<script>
export default {
    name: 'PhotoGallery',
    data () {
        return {
            elements: [],
            large: {},
            width: 197,
            count: 1,
            position: 0,
            mar: 0,
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        photoMagnification (e) {
            this.large.src = e.src
        },
        prevPhoto () {
            this.position += this.width * this.count;
            this.position = Math.min(this.position, 0)
            this.mar= this.position + 'px';
        },
        nextPhoto () {
            this.position -= this.width * this.count;
            this.position = Math.max(this.position, -this.width * (this.elements.length - this.count*5));
            this.mar = this.position + 'px';
        }
    },
    created () {
        this.large = {
            src: "Photo_PhotoGallery/photoGallery_2.png"
        },
        this.elements = [
            {
                src: 'Photo_PhotoGallery/photoGallery_1.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_2.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_3.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_4.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_5.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_6.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_7.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_8.png'
            },
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
        width: 480px;
        height: 390px;
        border: 15px solid #D2B48C;
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
        padding: 10px 87px 123px 87px;
        width: 985px;
    }
    .carousel_of_images img {
        width: 157px;
        height: 157px;
        display: block;
    }

    .arrow {
        display: block;
        position: absolute;
        top: 65px;
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
        left: 0px;
    }
    .next {
        right: 0px;
    }
    .gallery {
        width: 985px;
        overflow: hidden;
        margin: 0;
    }
    .gallery ul {
        width: 9999px;
        height: 157px;
        margin: 0;
        padding: 0;
        list-style: none;
        transition: margin-left 250ms;
        font-size: 0;
    }
    .gallery li {
        display: inline-block;
        margin: 0 20px 0 20px;
    }
</style>