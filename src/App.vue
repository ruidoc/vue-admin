<template>
    <div class="layout">
        <div v-if="login">
            <div class="layout_title">
                <title-content></title-content>
            </div>
            <div class="layout_left">
                <left-menu></left-menu>
            </div>
            <div class="layout_content">
                <router-view></router-view>
            </div>
        </div>
        <div class="loginPage" v-if="!login">
            <login></login>
        </div>
    </div>
</template>
<script>
    import leftMenu from './components/leftMenu'
    import TitleContent from './components/TitleContent'
    import Login from './components/Login'

    let data = {
        
    }

    export default {
        data() {
            return data
        },
        components: {
            leftMenu,
            TitleContent,
            Login
        },
        computed: {
            login() {
                let log = this.$store.state.admin;
                if(log == null || log._id == null){
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>
<style>
    html, body {
        width: 100%;
        height: 100%;
        font-weight: bold;
        overflow: hidden;
    }
    .layout{
        height: 100%;
        position: relative;
    }
    .layout_title {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 60px;
        border-bottom: 1px solid #dddee1;
    }
    .layout_left {
        width: 200px;
        position: absolute;
        left: 0; bottom: 0; top: 59px;
    }
    .layout_content {
        position: absolute;
        left: 200px; bottom: 0; top: 60px; right: 0;
        background: #fff;
    }
    .loginPage {
        width: 100%;
        height: 100%;
    }
</style>