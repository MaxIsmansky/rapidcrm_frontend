<template>
    <div class="body">
        <div class="registration-background">
            <div class="registration">
                <p class="title">Оформление заказа</p>
                <p class="subtitle">Имя*:</p>
                <input class="fill" type="text" size="25" maxlength="30" value="">
                <p class="subtitle">Email*:</p>
                <input class="fill" type="text" size="25" maxlength="30" value="">
                <p class="subtitle">Номер телефона*:</p>
                <input class="fill" type="tel" size="25" maxlength="30" value="">
                <p class="subtitle">Адрес*:</p>
                <input class="fill address" type="text" size="37" maxlength="60" value="">
                <p class="subtitle">Заказ:</p>
                <table class="table">
                    <thead class="tableHead">
                        <tr>
                            <th>Наименование</th>
                            <th>Кол-во, шт.</th>
                            <th>Цена, руб.</th>
                            <th>Уда- лить</th>
                        </tr>
                    </thead>
                    <tbody class="tableBody">
                        <tr v-for="product in orderTable" :key="product.id">
                            <td>{{ product.name }}</td>
                            <td>
                                <div class="count">
                                    <span class="change minus min" @click="Minus(product.id, product)">
                                        <span>-</span>
                                    </span>
                                    <input type="text" name="productСount" value="1" disabled="">
                                    <span class="change plus" @click="Plus(product.id, product)">
                                        <span>+</span>
                                    </span>
                                </div>
                            </td>
                            <td class="price">{{ product.price * product.value }}</td>
                            <td><img src="../assets/Close.png"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="amount">Сумма заказа:</td>
                            <td class="amount">{{ orderAmount }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p class="subtitle">Комментарии:</p>
                <textarea class="fill comments" cols="39" rows="4"></textarea>
                <p class="hint">* - обязательные для заполнения поля</p>
                <input class="placeAnOrder" type="submit" value="Заказать">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Order',
    data () {
        return {
            orderTable: [],
            sumVal: 0,
        }
    },
    methods: {
        Minus (id, product) {
            --document.querySelectorAll('.count input')[id].value
            if (document.querySelectorAll('.count input')[id].value < 2) {
                document.querySelectorAll('.count input')[id].value = 1
                document.querySelectorAll('.count .minus')[id].classList.add('min')
            }
            product.value = document.querySelectorAll('.count input')[id].value
        },
        Plus (id, product) {
            ++document.querySelectorAll('.count input')[id].value
            if (document.querySelectorAll('.count input')[id].value > 1) {
                document.querySelectorAll('.count .minus')[id].classList.remove('min')
            }
            product.value = document.querySelectorAll('.count input')[id].value
        },
    },
    computed: {
        orderAmount() {
            this.sumVal = 0
            let tds = this.orderTable
            for (let i=0; i < tds.length; i++) {
                this.sumVal += Number(tds[i].price*tds[i].value)
            }
            return this.sumVal
        }
    },
    created () {
        this.orderTable = [
            {
                id: '0',
                name: 'Печенье имбирное домашнее',
                price: '250',
                value: '1'
            },
            {
                id: '1',
                name: 'Торт шоколадный',
                price: '150',
                value: '1'
            },
        ]
    },
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
.registration-background {
    margin: auto;
    padding-bottom: 123px;
    width: 630px;
}
.registration {
    margin-left: auto;
    margin-right: auto;
    padding: 15px 88px 45px 88px;
    border: 20px solid #D2B48C;
    border-radius: 24px;
    background-color: #FFEBCD;
    text-decoration: none;
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
    /* padding-left: 30px; */
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
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


/* TABLE */
table {
    width: 414px;
    margin-bottom: 25px;
    border-spacing: 0;
}
.tableHead {
    background-color: #948167;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.tableHead th {
    text-align: center;
    padding: 10px;
    border: 2px solid #333232;
}
.tableHead :first-child {
    border-radius: 16px 0 0 0;
}
.tableHead :last-child {
    border-radius:0 16px 0 0;
}
.tableBody {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.tableBody tr td {
    border: 2px solid #333232;
}
.tableBody tr:last-child td:first-child {
    border-radius: 0 0 0 16px;
}
.tableBody tr:last-child td:last-child {
    border-radius: 0 0 16px 0;
}
.tableBody td {
    padding: 10px;
}
.tableBody img {
    width: 18px;
    height: 18px;
}
.amount {
    /* text-transform: uppercase; */
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}

/* quantity BUTTON */
.count {
    display: flex;
}
.count .change {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    font-size: 20px;
    font-weight: 600px;
    color: #333232;
    background-color: #AAFFA3;
    border: 2px solid #76C25B;
    border-radius: 4px;
    cursor: pointer;
}
.count input {
    max-width: 35px;
    padding: 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
    background-color: #FFEBCD;
    border: none;
}
.count .minus.min {
    background-color: #D3D3D3;
    border: 2px solid #BBBABA;
    border-radius: 4px;
}


.comments {
    margin-bottom: 10px;
}
.hint {
    margin: 0px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 158%;
    color: #333232;
}

.placeAnOrder {
    display: block;
    margin: 35px auto 0px auto;
    padding: 10px 47px 10px 47px;
    border: 0;
    border-radius: 16px;
    background-color:#333232;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #FFFFFF;
}
</style>