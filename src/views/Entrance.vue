<template>
    <div class="body">
        <div class="entrance-background">
            <div class="entrance">
                <p class="title">Вход</p>
                <p class="subtitle">Имя:</p>
                <input class="fill" type="text" size="25" maxlength="30" value="">
                <p class="subtitle">Пароль</p>
                <input class="fill" type="password" size="25" maxlength="30" value="" >
                <br>
                <input class="enter" type="submit" value="ВОЙТИ">
                <p class="subtitle ili">ИЛИ</p>
                <router-link to="/registration" class="registration" @click="scrollToTop">
                    <input class="register" type="submit" value="Зарегистрироваться">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Entrance',
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
    padding-top: 145px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}
.entrance-background {
    margin: auto;
    padding-bottom: 123px;
    width: 414px;
}
.entrance {
    margin-left: auto;
    margin-right: auto;
    padding: 15px 35px 35px 35px;
    border: 20px solid #D2B48C;
    border-radius: 24px;
    background-color: #FFEBCD;
}
.title {
    margin-top: 0px;
    margin-bottom: 15px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.subtitle {
    margin-top: 0;
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding-left: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.ili {
    padding-left: 0;
    text-align: center;
}
.fill {
    margin-bottom: 25px;
    padding: 5px 13px 5px 30px;
    border-radius: 16px;
    border: 3px solid #998F8F;
    background: #D3D3D3;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #998F8F;
}
.enter {
    display: block;
    margin: 10px auto 10px auto;
    padding: 10px 67px 10px 66px;
    border: 0;
    border-radius: 16px;
    background-color: #333232;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #FFFFFF;
}
.registration {
    text-decoration: none;
}
.register {
    display: block;
    margin: 10px auto 0px auto;
    padding: 10px;
    border: 0;
    border-radius: 16px;
    background-color:#948167;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
</style>