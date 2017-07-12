<template>
    <div class="content">
        <div class="logo">
            <Icon type="social-vimeo" size="38" class="icon"></Icon>
            <p>vue-admin</p>
        </div>
        <div class="title">
            <Menu mode="horizontal" active-name="1">
                <Menu-item name="1">
                    <Icon type="ios-home"></Icon>
                    官网
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="social-github"></Icon>
                    github
                </Menu-item>
                
                <Badge dot style="margin: 0 10px 0 50px">
                    <Icon type="ios-bell-outline" size="26"></Icon>
                </Badge>
                <Dropdown style="margin-left: 15px;">
                    <a href="javascript:void(0)">
                        <img src="/static/img/ava1.png" width="40" style="vertical-align: middle">
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>我的主页</Dropdown-item>
                        <Dropdown-item>系统设置</Dropdown-item>
                        <Dropdown-item divided>退出</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </Menu>
            
        </div>
    </div>
</template>

<script>

    var data = {}
    
    export default {
        name: 'TitleContent',
        data() {
            return data
        },
        methods: {
            
        },
        components: {
            
        },
        computed: {
            
        },

    }
</script>
<style scoped>
    .content {
        height: inherit;
    }
    .logo {
        display: inline-block;
        color: #2d8cf0;
        height: inherit;
        vertical-align: middle;
        padding-left: 30px;
    }
    .logo .icon {
        vertical-align: middle;
    }
    .logo p {
        display: inline-block;
        font-weight: normal;
        font-size: 25px;
        line-height: 60px;
        margin-left: 5px;
        vertical-align: middle;
    }
    .title {
        height: inherit;
        float: right;
        padding-right: 50px;
    }
</style>