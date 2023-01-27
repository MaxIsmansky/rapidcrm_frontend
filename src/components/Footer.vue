<template>
    <footer class="body">
        <div class="footer">
            <div class="footer1">
            <img class="logo_footer" src="../assets/logo.png"/>

            <div class="navigation">
            <ul class="menu_footer" @click="scrollToTop">
                <li><span class="section">Разделы сайта</span></li>
                <li><router-link to="/">Главная</router-link></li>
                <li><router-link to="/Menu">Меню</router-link></li>
                <li><router-link to="/aboutUs">О нас</router-link></li>
                <li><router-link to="/photoGallery">Фотогалерея</router-link></li>
            </ul>
            </div>
            <div class="contacts">
            <ul class="information">
                <li><span class="section">Контактная информация</span></li>
                <li><span class="fat">Позвони нам:</span> +7 (954) 123-45-67</li>
                <li><span class="fat">Напиши нам:</span> сделаноСлюбовью@love.ru</li>
                <li><span class="fat">Приходи к нам:</span> <br> понедельник - воскресенье <br> 10:00 - 23:00 
                <br> <span class="address">по адресу:</span> г. Поач, ул. Поачиковая, д.5. стр 3</li>
            </ul>
            </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
.body {
    margin: 0;
    padding: 0;
}
.footer{
    top: 0;
    width: 100%;
    background-color: #948167;  
    background-position: center center;
    background-size: cover;
    text-align: center;
}
.footer1{
    display: inline-block;
    margin-left: 80px;
    margin-right: 80px;
    padding: 0;
    vertical-align: top;
}

.logo_footer {
    float: left;
    width: 172px;
    height: 76px;
    margin: 40px 153px 201px 0;
}

.section {
    margin-bottom: 11px;
    text-decoration: underline;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    line-height: 158%;
    color: #FFFFFF;
}

.navigation {
    float: left;
    margin: 40px 204px 104px 0;
    text-align: center;
}
.menu_footer{
    margin:0;
    padding: 0;
}
.menu_footer li {
    margin-bottom: 6px;
    list-style: none;
}
.menu_footer a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 158%;
    color: #FFFFFF;
}

.contacts {
    float: left;
    margin: 40px 162px 40px 0;
    text-align: center;
}
.information {
    margin: 0;
    padding: 0;
}
.information li {
    margin-bottom: 6px;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 158%;
    color: #FFFFFF;
}
.fat {
    font-size: 20px;
    font-weight: 600;
}
.address {
    font-weight: 600;
}

@media (max-width: 1399.98px) {
    .logo_footer {
        width: 122px;
        height: 55px;
        margin: 20px 91px 166px 0;
    }
    .section {
        font-size: 16px;
    }
    .navigation {
        margin: 20px 73px 84px 0;
    }
    .menu_footer a {
        font-size: 14px;
    }
    .contacts {
        margin: 20px 44px 20px 0;
    }
    .information li {
        font-size: 14px;
    }
    .fat {
        font-size: 16px;
    }
}
@media (max-width: 899.98px) {
    .logo_footer {
        width: 53px;
        height: 30px;
        margin: 15px 13px 130px 0;
    }
    .section {
        font-size: 12px;
    }
    .navigation {
        margin: 15px 13px 50px 0;
    }
    .menu_footer a {
        font-size: 10px;
    }
    .contacts {
        margin: 15px 0px 15px 0;
    }
    .information li {
        font-size: 10px;
    }
    .fat {
        font-size: 12px;
    }
}
</style>