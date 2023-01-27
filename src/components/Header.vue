<template>
    <header>
        <div class = header>
            <div class="selection"> 
                <img class="logo_header" src="../assets/logo.png"/>
                    <ul class="menu" @click="scrollToTop">
                        <li><router-link to="/" exact>Главная</router-link></li>
                        <li><router-link to="/Menu">Меню</router-link></li>
                        <li><router-link to="/aboutUs">О нас</router-link></li> 
                        <li><router-link to="/photoGallery">Фотогалерея</router-link></li>
                    </ul> 
                <div class="entry"><router-link to="/entrance" @click="scrollToTop">Вход</router-link></div>
                <div class="order"><router-link to="/order" @click="scrollToTop">Заказ</router-link></div>
            </div>
         </div>
    </header>
</template>

<script scoped>
import router from '@/router';

 
export default {
    name: "Header",
    components: { router },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style>
body { 
    margin: 0;
    padding: 0;
}
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #615B4B;  
    background-position: center center;
    background-size: cover;
    text-align: center;
    z-index: 1000;
}
.selection {
    display: inline-block;
    margin: 0 80px 0 80px;
    padding: 0;
    vertical-align: top;
}
.logo_header {
    float:left;
    width: 172px;
    height: 76px;
    margin: 17px 321px 17px 0;
}

.menu {
    float: left;
    margin: 41px 0 41px 0;
    padding: 0;

}

.menu li {
    display: inline-block;
    text-align: center;
}

.menu a {
    display: block;
    padding: 0 0 0 49px;
    text-decoration: none;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #FFFFFF;
}

a.router-link-active,
li.router-link-active {
    color: #FFEBCD
}

.entry,
.order { 
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 89px;
    height: 58px;
    text-align: center;
    border-radius: 16px;
}
.entry {
    margin: 26px 0 26px 96px;
    background-color: #333232;
}
.order {
    margin: 26px 0 26px 20px;
    background-color: #D2B48C;
}
.entry a,
.order a {
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 28.8px;
}
.entry a {
    color: #FFFFFF;
}
.order a {
    color: #333232;
}




@media (max-width:1399.98px) {
    .logo_header {
        width: 122px;
        height: 55px;
        margin: 12px 156px 12px 0;
    }
    .menu {
        margin: 30px 0 30px 0;
    
    }
    .menu a {
        padding: 0 0 0 13px;
    }
    .entry {
        margin: 11px 0 11px 15px;
    }
    .order {
        margin: 11px 0 11px 16px;
    }
}

@media (max-width: 899.98px) {
    .logo_header {
        width: 53px;
        height: 30px;
        margin: 10px 7px 10px 0;
    }
    .menu {
        margin: 15px 0 16px 0;
    
    }
    .menu a {
        padding: 0 0 0 15px;
        font-size: 12px;
    }
    .entry {
        margin: 7px 0 8px 2px;
        width: 50px;
        height: 35px;
    }
    .entry a, 
    .order a{
        font-size: 12px;
    }
    .order {
        margin: 7px 0 8px 5px;
        width: 50px;
        height: 35px;
    }
}
</style>