<template>
    <div class="main">
        <Menu active-name="0-0" theme="dark" width="auto" @on-select="route">
            <Menu-group v-for="(menu,index) in menus" :title="menu.name" :key="index">
                <Menu-item v-for="(item,ins) in menu.item" :key="ins" :name="index+'-'+ins">
                    <Icon :type="item.icon"></Icon>
                    {{item.name}}
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>
</template>
<script>
    let data = {
        menus: [
            {
                name: '主页',
                item: [
                    {
                        icon: 'chatbubbles',
                        name: '首页',
                        to: '/'
                    },
                    {
                        icon: 'document-text',
                        name: '用户管理',
                        to: '/users'
                    }
                ]
            },
            {
                name: '其他',
                item: [
                    {
                        icon: 'chatbubbles',
                        name: '管理员',
                        to: '/admins'
                    }
                ]
            }
        ],
    }
    export default {
        data() {
            return data
        },
        methods: {
            route(name) {
                let ins = name.split('-');
                let to = this.menus[ins[0]].item[ins[1]].to;
                this.$router.push(to)
            }
        },
        computed: {
            active() {
                
            }
        }
    }
</script>
<style scoped>
    .main{
        height: 100%;
        background: #464c5b;
    }
</style>