<template>
    <div class="main">
        <Menu active-name="1" theme="dark" width="auto">
            <Menu-group title="用户管理">
                <Menu-item name="1">
                    <Icon type="document-text"></Icon>
                    用户总览
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="chatbubbles"></Icon>
                    评论管理
                </Menu-item>
            </Menu-group>
            <Menu-group title="统计分析">
                <Menu-item name="3">
                    <Icon type="heart"></Icon>
                    用户留存
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="heart-broken"></Icon>
                    流失用户
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>
</template>
<script>
    var data = {}
    export default {
        data(){
            return data
        },
        method:{

        }
    }
</script>
<style scoped>
    .main{
        height: 100%;
        background: #464c5b;
    }
</style>