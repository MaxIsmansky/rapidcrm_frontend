<template>
    <nav>
        <transition name="sideMenu" mode="out-in">
            <div v-if="!show" @click="show = !show" key="showMenu">
                <img class="showSideMenu" id="shoeSideMenu" src="../assets/Photo_Menu/showSideMenu.png">
            </div>
            <div class="sideMenu" id='sideMenu' v-else key="hideMeu">
                <div class="positionMenu">
                    <img class="hideSideMenu" id="hideSideMenu" @click="show = !show" src="../assets/Photo_Menu/hideSideMenu.png">
                    <ul v-if="show">
                        <li class="menuSections" v-for="el in sideMenu">{{ el }}</li>
                    </ul>
                </div>
            </div>          
        </transition>
    </nav>
</template>

<script>
export default {
    name: "SideMenu",
    data() {
        return {
            sideMenu: [],
            show: false,
            head: document.querySelector('.header'),
            foot: document.querySelector('.footer'),
        }
    },
    methods: {
        SideMenu (e) {
            let side = document.getElementById("hideSideMenu")
            if (e.target.id == 'showSideMenu') {
                side.style.display = 'block'
            }
        },
        handleScroll () {
            let openSideMenu = document.querySelector('.positionMenu');
            // event.preventDefault()
            if(openSideMenu) {
                // alert(this.head.getBoundingClientRect().bottom)
                // alert(openSideMenu.getBoundingClientRect().bottom)
                alert(this.foot.getBoundingClientRect().top)
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        this.sideMenu = [
            'Салаты', 
            'Супы', 
            'Горячие блюда', 
            'Десерты', 
            'Горячие напитки', 
            'Прохладительные напитки', 
            'Алкогольные напитки'
        ]
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style>
/* SIDE MENU */
.showSideMenu {
    width: 65px;
    height: 65px;
    padding-top: 35px;
    padding-left: 80px;
}
.sideMenu {
    float: left;
    width: 325px;
    padding-left: 0;
    padding-bottom: 1px;
    margin-top: 0;
    margin-right: 80px;
}
.positionMenu {
    position: fixed;
    padding-top: 35px;
    border-radius: 0 0 24px 0;
    background-color: #D3D3D3;
}
.hideSideMenu {
    width: 65px;
    height: 65px;
    padding-left: 80px;
}
.menuSections {
    list-style: none;
    margin-top: 15px;
    margin-left: 80px;
    max-width: 217px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.sideMenu ul {
    padding: 0 0 45px 0;
    margin: 0;
}
</style>