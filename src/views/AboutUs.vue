<template>
<div class="body">
    <!-- Information -->
    <div class="information">
        <p>Ресторан “Сделано с любовью” находится в прекрасном городе Поач,история которого
            уходит корнями в далекое прошлое.</p>
        <p>Наш ресторан достаточно молодой, ведь ему всего 1 год. Но мы пытаемся стать лучше
            каждый день и  развиваемся, чтобы радовать Вас при каждой встрече.</p>
        <p>Наши повара накормят Вас самыми вкусными блюдами. А официанты готовы прийти на 
            помощь в любую минуты и сделать время проведенное у нас еще приятнее. Также не
            будем забывать про барменов: кто если не они, сделают Вам ароматный кофе, горячий
            чай или необычный коктель...</p>
        <p>У нас Вы можете посидеть с родными, встретиться с друзьями, отметить праздник 
            или важное событие, а также просто выпить кофе и подумать о чем-то важном.</p>
        <p>Мы очень надеемся, что Вам понравится в нашем уютном местечке, и Вы будете уходить с
            желанием заглянуть к нам еще раз.</p>
        <p>Мы всегда рады видеть Вас!</p>
    </div>

    <!-- Reasons -->
    <p class="heading">6 причин прийти именно к нам</p>
    <div class="reasons">
        <div class="reasons_picture_1"><p class="reason_1">Уютная атмосфера</p></div>
        <div class="reasons_picture_2"><p class="reason_2">Внимание к мелочам</p></div>
        <div class="reasons_picture_3"><p class="reason_3">Прекрасное расположение</p></div>
        <div class="reasons_picture_4"><p class="reason_4">Всегда свежие продукты</p></div>
        <div class="reasons_picture_5"><p class="reason_5">Доброжелательные люди</p></div>
        <div class="reasons_picture_6"><p class="reason_6">Вкусно и по-домашнему</p></div>
    </div>
</div>
</template>


<style scoped>
.body {
    margin: 0;
    padding-top: 145px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}

/* Information */
.information {
    width: 846px;
    margin-left: auto;
    margin-right: auto;
    padding: 88px 89px 69px 89px;
    border: 20px solid #D2B48C;
    border-radius: 24px;
    text-align: center;
    background-color: #FFEBCD;
}
.information p {
    margin: 0 0 20px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}

@media (max-width:1399.98px) {
    .information {
        width: 549px;
        padding: 10px 51px 10px 51px;
    }
}
@media (max-width:899.98px) {
    .information {
        width: 384px;
        padding: 6px;
        border: 10px solid #D2B48C;
    }
    .information p {
        font-size: 16px;
    }
}

/* Reasons */
.heading {
    margin-top: 45px;
    margin-bottom: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 158%;
    color: #FFFFFF;
    
}

@media (max-width: 1399.98px) {
    .heading {
        font-size: 16px;
    }
}

@media (max-width: 899.98px) {
    .heading {
        font-size: 14px;
    }
}

.reasons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 80px 125px 80px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #FFFFFF;
    
}

.reasons div {
    margin-top: 20px;
    border-radius: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.reasons p{
    padding: 1px 13px 1px 13px;
    text-align: center;
    background-color: #D2B48C;
}

.reasons_picture_1 {
    background-image: url("../assets/Photo_AboutUs/reason_1.png");
}
.reason_1 {
    margin: 121px 94px 121px 94px;
}

.reasons_picture_2 {
    background-image: url("../assets/Photo_AboutUs/reason_2.png");
}
.reason_2 {
    margin: 121px 84px 121px 84px;
}

.reasons_picture_3 {
    background-image: url("../assets/Photo_AboutUs/reason_3.png");
}
.reason_3 {
    margin: 121px 52px 121px 53px;
}

.reasons_picture_4 {
    background-image: url("../assets/Photo_AboutUs/reason_4.png");
}
.reason_4 {
    margin: 121px 62px 121px 62px;
}

.reasons_picture_5 {
    background-image: url("../assets/Photo_AboutUs/reason_5.png");
}
.reason_5 {
    margin: 121px 58px 121px 59px;
}

.reasons_picture_6 {
    background-image: url("../assets/Photo_AboutUs/reason_6.png");
}
.reason_6 {
    margin: 121px 66px 121px 67px;
}
</style>