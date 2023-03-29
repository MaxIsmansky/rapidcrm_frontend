<template>
    <div class="body">
        <div class="pageMenu">
<!-- SIDE MENU -->
            <SideMenu/>

<!-- MENU CARD -->
            <div class="mainPart">
                <ul class="listOfCard">
                    <li :key='card.id' v-for="card in cards" class="card">
                        <a class="caption-link">
                            <div class="photoOfDish">
                                <img :src=getImgUrl(card.src) class="photo">
                            </div>
                            <div class="description">
                                <ul class="description_text">
                                    <li v-for="(value, name) in card.description">
                                        <span class='description_key'>{{name }}:</span> {{ value }}
                                    </li>
                                </ul>
                            </div>
                        </a>
                        
                        <div class="nameOfDish">
                            <p class="title">{{ card.title }}</p>
                            <p class="price">{{ card.price }}</p>
                            <img class="shoppingCart" src="../assets/Photo_Menu/shoppingCart.png">
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'

export default {
    name: 'Menu',
    components: {
        SideMenu
    },
    data () {
        return {
            cards: [],
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
    },
    created () {
        this.cards = [
            {
                id: '1',
                src: 'Photo_Menu/gingerCookies.png',
                title: 'Печенье имбирное домашнее',
                price: '250 руб',
                description: {
                    Вес: '200г',
                    Состав: 'мёд, имбирь, корица, какао, апельсиновая цедра, сахар, лимонный сок, сливочное масло, мука, яйца, разрыхлитель, ванилин',
                    Каллорийность: '820ккал'
                }
            },
            {
                id: '2',
                src: 'Photo_Menu/curlyCookies.png',
                title: 'Печенье фигурное сладкое',
                price: '150 руб',
                description: {
                    Вес: '200г',
                    Состав: 'сливочное масло, мука, яйца, разрыхлитель, ванилин, сахар, какао',
                    Каллорийность: '820ккал'
                }
            },
            {
                id: '3',
                src: 'Photo_Menu/honeyCookies.png',
                title: 'Печенье мягкое с медом',
                price: '300 руб',
                description: ``
            },
            {
                id: '4',
                src: 'Photo_Menu/chocolateCake.png',
                title: 'Торт шоколадный',
                price: '150 руб',
                description: ``
            },
            {
                id: '5',
                src: 'Photo_Menu/creamCake.png',
                title: 'Торт кремовый с фруктами',
                price: '600 руб',
                description: ``
            },
            {
                id: '6',
                src: 'Photo_Menu/bigCake.png',
                title: 'Торт большой',
                price: '1100 руб',
                description: ``
            },
            {
                id: '7',
                src: "Photo_Menu/cake'hare'.png",
                title: 'Торт "Заяц"',
                price: '900 руб',
                description: ``
            },
            {
                id: '8',
                src: 'Photo_Menu/berryCake.png',
                title: 'Торт ягодно-шоколадный',
                price: '750 руб',
                description: ``
            },
            {
                id: '8',
                src: 'Photo_Menu/berryCake.png',
                title: 'Торт ягодно-шоколадный',
                price: '750 руб',
                description: ``
            },
            {
                id: '8',
                src: 'Photo_Menu/berryCake.png',
                title: 'Торт ягодно-шоколадный',
                price: '750 руб',
                description: ``
            },
            {
                id: '7',
                src: "Photo_Menu/cake'hare'.png",
                title: 'Торт "Заяц"',
                price: '900 руб',
            }
        ]
    }
}
</script>

<style scoped>
.body {
    margin: 0;
    padding-top: 110px;
    padding-bottom: 103px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}
.pageMenu {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}

/* CARDS */
.mainPart {
    margin: auto;
}

.listOfCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* justify-content: space-between; */
    box-sizing: border-box;
    margin: 0 60px 0px 80px;
    padding: 35px 0 0 0;
    list-style: none;
}

.card {
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column; 
}


/* PHOTO */
.photoOfDish {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 305px;
    height:298px;
    border-radius: 24px 24px 0 0;
    background-color: #FFEBCD; 
}
.photo{
    max-width: 271px;
    max-height: 270px;
}
.description {
    display: flex;
    align-items: center;
    text-align: center;
    width: 275px;
    height: 283px;
    padding: 15px 15px 0 15px;
    background-color: #948167;
    border-radius: 24px 24px 0 0;
}
.description_text {
    padding: 0;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 158%;
    color: #333232;
}
.description_key {
    font-weight: 600;
    padding: 0;
    margin: 0;
}

.caption-link {
    display: block;
    overflow: hidden;
    position: relative;
}
.photo {
    transition: all .5s ease;
}

.description {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(100%);
    transition: all .5s ease;
}

.caption-link:hover .description {
    transform: translateY(0);
    transition: all .5s ease;
}

.caption-link:hover .photo {
    transform: translateY(-100%);
    transition: all .5s ease;
}




/* TITLE / PRICE */
.nameOfDish {
    position: relative;
    width: 305px;
    height: 129px;
    border-radius: 0 0 24px 24px;
    background-color: #D2B48C; 
}

.title,
.price {
    margin: 0 22px 0 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.title {
    position: absolute;
    top: 14px;
}
.price {
    position: absolute;
    bottom: 14px;
}

.shoppingCart {
    position: absolute;
    top: 61px;
    left: 206px;
    padding: 13px 28px 13px 29px;
    border-radius: 16px;
    background-color: #615B4B;
    width: 32px;
    height: 32px;
}


@media (max-width:1399.98px) {
    .body {
        padding-top: 79px;
    }
}

@media (max-width: 899.98px) {
    .body {
        padding-top: 50px;
    }
/* CARDS */
    .listOfCard {
        margin: 0 60px 0px 80px;
        padding: 25px 0 0 0;
    }

    .card {
        margin-bottom: 10px;
        margin-right: 10px;
    }
/* PHOTO */
    .photoOfDish {
        width: 250px;
        height: 235px;
    }
    .photo{
    max-width: 213px;
    max-height: 199px;
}
    .description { 
        width: 220px;
        height: 220px;
        padding: 15px 15px 0 15px;
    }
    .description_text {
        font-size: 16px;
    }
/* TITLE / PRICE */
    .nameOfDish {
        width: 250px;
        height: 100px;
    }

    .title,
    .price {
        margin: 0 22px 0 10px;
        font-size: 16px;
    }
    .title {
        top: 10px;
    }
    .price {
        bottom: 10px;
    }

    .shoppingCart {
        top: 50px;
        left: 168px;
        padding: 7px 22px 6px 22px;
        width: 25px;
        height: 25x;
    }
}
</style>