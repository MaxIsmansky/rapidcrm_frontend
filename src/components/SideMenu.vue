<template>
    <nav>
        <transition name="sideMenu" mode="out-in">
            <div v-if="!show" @click="show = !show" key="showMenu">
                <img class="showSideMenu" id="shoeSideMenu" src="../assets/Photo_Menu/showSideMenu.png">
            </div>
            <div class="sideMenu" id='sideMenu' v-else key="hideMeu">
                <div class="positionMenu">
                    <img class="hideSideMenu" id="hideSideMenu" @click="show = !show" src="../assets/Photo_Menu/hideSideMenu.png">
                    <ul v-if="show" class="menuSections">
                        <li class="menuSectionItem" v-for="el in sideMenu">
                            <p>{{ el.section }}</p>
                            <ul>
                                <li class="menuSubsection" v-for="sub in el.subsection">{{ sub }}</li>
                            </ul>
                        </li>
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
            {section: 'Салаты',},
            {section: 'Супы'},
            {section: 'Горячие блюда'},
            {section: 'Десерты'},
            {section: 'Напитки',
             subsection: [
                'Горячие напитки',
                'Прохладительные напитки',
                'Алкогольные напитки'
             ]},
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
    width: 55px;
    height: 55px;
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
    width: 55px;
    height: 55px;
    padding-left: 80px;
}

/* MENU SECTIONS */
.menuSections {
    margin: 0;
    padding: 0 0 45px 0;
}
.menuSectionItem {
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
.menuSectionItem p{
    width: 200px;
    margin: 0;
}
.menuSectionItem ul {
    padding: 0;
}
.menuSubsection {
    width: 190px;
    list-style: none;
    margin-top: 10px;
    margin-left: 25px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}


@media (max-width:1399.98px) {
    .sideMenu {
        width: 300px;
    }
    .menuSectionItem  {
        max-width: 170px;
        font-size: 14px;
    }
    .menuSubsection {
        max-width: 150px;
        font-size: 12px;
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
    .menuSectionItem  {
        margin-top: 5px;
        margin-left: 50px;
        max-width: 110px;
        font-size: 12px;
        font-weight: 400;
    }
    .menuSubsection {
        width: 100px;
        margin-top: 5px;
        margin-left: 10px;
        font-size: 10px;
        font-weight: 400;
    }
    .menuSections {
        padding: 0 0 25px 0;
    }
}
</style>