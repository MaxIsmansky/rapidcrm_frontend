<template>
<div class="body">
<!-- Banner -->
    <section class="hero">
      <div class="container">
        <div class="hero_message">Ресторан “Сделано с любовью” - уют, добро, качество</div>
      </div>
    </section>
    
  <!-- Main_part -->
    <div class="Main">
      <div class="main_part">
        <p class="photo_come">г. Поач, ул. Поачиковая, д.5, стр.3 <br>
          Ждем Вас каждый день <br>
          с 10.00 до 23.00</p>
        <p class="come">Приходите</p>
      </div>

      <div class="main_part">
        <p class="call">Позвоните</p>
        <p class="photo_call">+7 (954) 123-45-67</p>
      </div>

      <div class="main_part">
        <p class="photo_write">сделаноСлюбовью@love.ru</p>
        <p class="write">Напишите</p>
      </div>

      <div class="main_part">
        <p class="delivery">Закажите</p>
        <p class="photo_delivery">Просто добавь в корзину <br> понравившиеся блюда и жди их <br> в любом месте</p>
      </div>
    </div>

    <div class="lower_part">
        <div class="lower_part_message">Мы всегда рады встрече с Вами!</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
/* Banner */
.body {
    margin: 0;
    padding-top: 145px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}

.hero {
    padding: 90px 280px 434px 280px;
    border: 20px solid #D2B48C;
    background-image: url("../assets/Photo_Home/Banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.container {
    box-sizing: border-box;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 17px 8px 17px;
    background-color: #FFEBCD; 
    border-radius: 24px; 
}
.hero_message {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 45px;
    font-weight: 600;
    line-height: 159%;
    color: #333232;
    -webkit-text-stroke: 1px #333232;
}

@media (max-width: 1399.98px) {
    body {
        padding-top: 105px;
    }
    .hero {
        padding: 50px 131px 208px 131px;
    }
    .container {
        padding: 34px 22px 34px 22px;
    }
    .hero-message {
        font-size: 35px;
    }
} 
@media (max-width: 899.98px) {
    body {
        padding-top: 85px;
    }
    .hero {
        padding: 70px 80px 140px 80px;
    }
    .container {
        padding: 8px 16px 8px 16px;
    }
    .hero-message {
        font-size: 30px;
    }
}


/* Main_part */
.Main{
    box-sizing: border-box;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
}
.main_part {
    display: inline-block;
}
.photo_come {
    float: left;
    margin-top: 60px;
    margin-left: 80px;
    padding: 40px 109px 224px 108px;
    background-image: url("../assets/Photo_Home/photo_come.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.come {
    float: right;
    margin-top: 215px;
    margin-left: 20px;
}

.photo_call {
    float: right;
    margin-top: -73px;
    margin-left: 20px;
    padding: 40px 152px 282px 217px;
    background-image: url("../assets/Photo_Home/photo_call.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.call {
    float: left;
    margin-top: 82px;
    margin-left: 673px;
}

.photo_write {
    float: left;
    margin-top: -75px;
    margin-left: 80px;
    padding: 40px 127px 282px 127px;
    background-image: url("../assets/Photo_Home/photo_write.png");
    background-repeat: no-repeat;
    background-size: cover;
    
}
.write {
    float: right;
    margin-top: 80px;
    margin-left: 20px;
}

.photo_delivery {
    float: right;
    margin-top: -73px;
    margin-left: 20px;
    padding: 40px 1px 224px 216px;
    background-image: url("../assets/Photo_Home/photo_delivery.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.delivery {
    float: left;
    margin-top: 82px;
    margin-left: 689px;
}

.come,
.call,
.write,
.delivery {
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 159%;
    color:#FFEBCD;
}
.photo_come,
.photo_call,
.photo_write,
.photo_delivery {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 159%;
    color: #FFEBCD;
}

.lower_part {
    box-sizing: border-box;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 55px 500px 55px 500px;
    background-image: url("../assets/Photo_Home/lower_part.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.lower_part_message {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 159%;
    color: #FFFFFF;
}


@media (max-width: 1399.98px) {
    .photo_come {
        margin-top: 40px;
        margin-left: 80px;
        padding: 32px 70px 232px 70px;
    }
    .come {
        margin-top: 196px;
        margin-left: 20px;
    }
    .photo_call {
        margin-top: 20px;
        margin-left: 20px;
        padding: 44px 82px 278px 214px;
    }
    .call {
        margin-top: 176px;
        margin-left: 199px;
    }
    .photo_write {
        margin-top: 20px;
        margin-left: 80px;
        padding: 22px 137px 300px 137px;
    }
    .write {
        margin-top: 167px;
        margin-left: 20px;
    }
    .photo_delivery {
        margin-top: 20px;
        margin-left: 20px;
        padding: 20px 30px 244px 214px;
    }
    .delivery {
        margin-top: 130px;
        margin-left: 222px;
    }
    .lower_part {
        padding: 42px 276px 42px 276px;
    }
}

@media (max-width: 899.98px) {
    .photo_come {
        margin-top: 40px;
        margin-left: 80px;
        padding: 30px 36px 127px 36px;
    }
    .come {
        margin-top: 136px;
        margin-left: 20px;
    }
    .photo_call {
        margin-top: 15px;
        margin-left: 20px;
        padding: 24px 80px 144px 125px;
    }
    .call {
        margin-top: 93px;
        margin-left: 87px;
    }
    .photo_write {
        margin-top: 15px;
        margin-left: 80px;
        padding: 20px 68px 145px 72px;
    }
    .write {
        margin-top: 96px;
        margin-left: 20px;
    }
    .photo_delivery {
        margin-top: 15px;
        margin-left: 20px;
        padding: 14px 36px 164px 105px;
    }
    .delivery {
        margin-top: 117px;
        margin-left: 96px;
    }
    .lower_part {
        padding: 29px 165px 29px 165px;
    }
}
</style>