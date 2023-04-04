<template>
    <div class="registration_body">
        <div class="registration-location">
            <div class="registration-background">
                <p class="registration_title">Регистрация</p>
                <form @submit="newUserRegistration" method="post">
                    <p class="registration_subtitle name">Имя*:</p>
                    <input class="registration_fill" id="firstName" type='text' size="25" maxlength="30" v-model="registration.firstName">
                    <p class="registration_subtitle">Фамилия*:</p>
                    <input class="registration_fill" id="lastName" type='text' size="25" maxlength="30" v-model="registration.lastName">
                    <p class="registration_subtitle">Email*:</p>
                    <input class="registration_fill" id="email" type='text' size="25" maxlength="30" v-model="registration.email">
                    <p class="registration_subtitle">Номер телефона*:</p>
                    <input class="registration_fill" id="phone" type='tel' size="25" maxlength="30" v-model="registration.phone">
                    <p class="registration_subtitle">Пароль*:</p>
                    <input class="registration_fill password" id="password" type="password" size="25" maxlength="30" v-model="registration.password" >
                    <p class="registration_hint">* - обязательные для заполнения поля</p>
                    <button  class="registration_register" id="register" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </form>
                <p class="registration_subtitle ili">ИЛИ</p>
                <router-link to="/entrance" class="registration_entrance" @click="scrollToTop">
                    <button class="registration_enter" type="submit">Войти</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Registration',
    data () {
        return {
            registration: {
                firstName: null,
                lastName: null,
                email: null, 
                phone: null,
                password: null,
                role: 'ROLE_USER'
            }
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        newUserRegistration (e) {
            let userName = document.getElementById('firstName').value;
            let userSurname = document.getElementById('lastName').value;

            let userMail = document.getElementById('email').value;
            if (!userMail .match('^\\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$')) {
                let invalidMail = document.createElement('p');
                invalidMail.innerHTML = 'Введите, пожалуйста, корректный адрес почты';
                invalidMail.className = 'registration_invalidInput';
                document.getElementById('email').after(invalidMail);
                userMail = '';
                document.getElementById('email').value = '';
                setTimeout(() => invalidMail.remove(), 2000);
            }

            let userPhone = document.getElementById('phone').value;
            if (!userPhone.match('^8\\d{10}$')) {
                let invalidNumber = document.createElement('p');
                invalidNumber.innerHTML = 'Напишите, пожалуйста, свой номер телефона, начиная с 8';
                invalidNumber.className = 'registration_invalidInput';
                document.getElementById('phone').after(invalidNumber);
                userPhone = '';
                document.getElementById('phone').value = '';
                setTimeout(() => invalidNumber.remove(), 2000);
            }

            let userPassword = document.getElementById('password').value
            if (userPassword.length < 8) {
                let invalidPassword = document.createElement('p');
                invalidPassword.innerHTML = 'Пароль должен содержать не меньше 8 знаков';
                invalidPassword.className = 'registration_invalidInput';
                document.getElementById('password').after(invalidPassword);
                userPassword = '';
                document.getElementById('password').value = '';
                setTimeout(() => invalidPassword.remove(), 2000);
            }

            if (userName!='' && userSurname!='' && userMail!='' && userPhone!='' && userPassword!='') {
                this.axios.post('http://192.168.31.74:8082/api/users/save', this.registration)
                    .then(() => {
                        document.getElementById('firstName').value = '';
                        document.getElementById('lastName').value = '';
                        document.getElementById('email').value = '';
                        document.getElementById('phone').value = '';
                        document.getElementById('password').value = '';

                        let registrationSuccessful = document.createElement('p');
                        registrationSuccessful.className = 'registration_registrationSuccessful';
                        registrationSuccessful.innerHTML = 'Вы успешно зарегистрировались! Спасибо!';
                        register.after(registrationSuccessful);
                        setTimeout(() => registrationSuccessful.remove(), 3000);

                        
                    })
                    .catch(err => console.log(err))
            } else {
                let emptyInput = document.createElement('p');
                emptyInput.className = 'registration_emptyInput';
                emptyInput.innerHTML = 'Заполните, пожалуйста, все необходимые поля';
                register.after(emptyInput);
                setTimeout(() => emptyInput.remove(), 3000);
            }
            e.preventDefault();
        }
    }
}

        // sendRequest (method, url, body = null) {
        //     return new Promise((resolve, reject) => {
        //         this.xhr.open(method, url)
        //         this.xhr.responseType='json'
        //         this.xhr.setRequestHeader('Content-Type', 'application/json')
        //         this.xhr.onload = () => {
        //             if(this.xhr.status>=400) {
        //                 reject(this.xhr.response)
        //             } else {
        //                 resolve(this.xhr.response)
        //             }
        //         }
        //         this.xhr.onerror = () => {
        //             reject(this.xhr.response)
        //         }
        //         this.xhr.send(JSON.stringify(body))
        //     })
        // },
        // newUserRegistration () {
        //     if (userName!='' && userSurname!='' && userEmail!='' && userPhone!='' && userPassword!='') {
        //         this.sendRequest('POST', this.requestURL, {
        //             firstName: userName,
        //             lastName: userSurname,
        //             email: userEmail,
        //             phone: userPhone,
        //             password: userPassword,
        //             role: 'ROLE_USER'
        //         })
        //     }
        // }
        
</script>

<style>
.registration_body {
    margin: 0;
    padding-top: 145px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}
.registration-location {
    margin: auto;
    padding-bottom: 123px;
    width: 414px;
}
.registration-background {
    margin-left: auto;
    margin-right: auto;
    padding: 15px 35px 35px 35px;
    border: 20px solid #D2B48C;
    border-radius: 24px;
    background-color: #FFEBCD;
}
.registration_title {
    margin-top: 0px;
    margin-bottom: 15px;
    /* margin-bottom: 0; */
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.registration_subtitle {
    margin-top: 25px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding-left: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.name {
    margin-top: 0;
}
.ili {
    margin: 0;
    padding-left: 0;
    text-align: center;
}
.registration_fill {
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
.password {
    margin-bottom: 10px;
}
.registration_hint {
    margin: 0px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 158%;
    color: #333232;
}
.registration_entrance {
    text-decoration: none;
}
.registration_enter {
    display: block;
    margin: 10px auto 0px auto;
    padding: 10px 97px 10px 96px;
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
.registration_register {
    display: block;
    margin: 35px auto 10px auto;
    padding: 10px 14px;
    border: 0;
    border-radius: 16px;
    background-color:#948167;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}


.registration_registrationSuccessful{
    margin: 0;
    padding-bottom: 10px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #16C01C;
}
.registration_emptyInput {
    margin: 0;
    padding-bottom: 10px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #F02316;
}
.registration_invalidInput {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 158%;
    color: #F02316;
}
</style>