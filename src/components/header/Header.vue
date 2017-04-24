<template>
    <div class="" id="header_top">
        <nav class="navbar-inverse_wrapper">
            <div class="navbar-header_wrapper">
                <ul class="nav_list">
                    <li><a href="#">病人入口 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">访客&病人信息</a></li>
                    <li><a href="#">专家团队</a></li>
                    <li><a href="#">新闻</a></li>
                    <li><a href="#">预约</a></li>
                    <div class="clear"></div>
                </ul>
                <form class="navbar_form">
                    <Input v-model="value4" icon="android-search" placeholder="请输入关键字..." style="width: 250px" @on-click="handleSearch"></Input>
                </form>
                <div class="clear"></div>
            </div>
        </nav>
        <div class="clear"></div>
        <header>
            <div class="layout-header__wrapper">
                <div class="header-logo">
                logo
                </div>
                <div class="header-nav--tabs">
                    <ul class="nav nav-tabs">
                      <li role="presentation" class="active">
                        <a href="#">Home</a>
                      </li>
                      <li role="presentation"><a href="#">Profile</a></li>
                      <li role="presentation"><a href="#">Messages</a></li>
                    </ul>
                    <div class="clear"></div>
                </div>
                <div class="header-nav__actions">
                    <ul role="presentation">
                        <li>
                            <a href="">找医生</a>
                        </li>
                        <li>
                            <a href="">找专家</a>
                        </li>
                        <li>
                            <a href="">预约</a>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
                <div class="nav-panel">
                    aaa
                </div>
            </div>
        </header>
    </div>
</template>
<script>

export default {
    data() {
        return {
            value4: "",
        }
    },
    methods:{
        handleSearch(){
            alert("搜索")
        }
    }
}
</script>
<style scoped>

.nav > li{
    float: left
}
.nav{
    float: left;
}

.ivu-input-icon {
    font-size: 26px !important;
}
</style>
<style>
#header_top .ivu-input-icon {
    font-size: 22px !important;
}
</style>
