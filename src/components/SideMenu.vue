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
            let a = window.innerHeight - (openSideMenu.offsetHeight + this.head.offsetHeight)
            // event.preventDefault()
            if(openSideMenu) {
                if (window.innerHeight - this.foot.getBoundingClientRect().top > a) {    
                    openSideMenu.style.position = 'relative'
                } else {
                    openSideMenu.style.position = 'fixed'
                }
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

<style scoped>
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

@media (max-width:1399.98px) {
    .sideMenu {
        width: 300px;
    }
    .menuSections {
        max-width: 170px;
        font-size: 14px;
    }
}

@media (max-width: 899.98px) {
    .showSideMenu {
        width: 45px;
        height: 45px;
        padding-top: 25px;
        padding-left: 50px;
    }


    .sideMenu {
        width: 250px;
        margin-right: 50px;
    }
    .positionMenu {
        padding-top: 25px;
    }
    .hideSideMenu {
        width: 45px;
        height: 45px;
        padding-left: 50px;
    }
    .menuSections {
        margin-top: 5px;
        margin-left: 50px;
        max-width: 110px;
        font-size: 12px;
        font-weight: 400;
    }
    .sideMenu ul {
        padding: 0 0 25px 0;
    }
}
</style>