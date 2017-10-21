<template>
    <div class="main">
        <Card class="card" :padding="35">
            <p slot="title" align="center">
                管理员登录
            </p>
            <Form ref="formInline" :model="admin" >
                <Form-item >
                    <Input type="text" size="large" v-model="admin.name" icon="ios-person-outline" placeholder=" 名称">
                    </Input>
                </Form-item>
                <Form-item >
                    <Input type="password" size="large" v-model="admin.pass" icon="ios-unlocked-outline" placeholder=" 密码">
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" size="large" :loading="loading" @click="Submit('formInline')" long>登录</Button>
                </Form-item>
            </Form>
        </Card>
    </div>
</template>

<script>

    import axios from 'axios'
    import moment from 'moment'

    let data = {
        admin: {
            name: '',
            pass: ''
        },
        loading: false
    }

    export default {
        name: 'Login',
        data() {
            return data
        },
        methods: {
            Submit() {
                this.loading = true,
                axios.post('http://www.node.com/admin/manage/login',this.admin).then(resulte => {
                    this.loading = false
                    let code = resulte.data.code;
                    if (code == 204) {
                        this.$Message.error('账号或密码错误！');
                    }
                    if (code == 401) {
                        this.$Message.warning('参数错误！');
                    }
                    if (code == 200) {
                        this.$store.commit('login',resulte.data.data);
                        this.$Message.success('登录成功！');
                    }
                }).catch(
                    err => {
                        console.log(err)
                        this.loading = false
                        this.$Message.error('登录失败！');
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        height: 100%;
    }
    .card {
        margin: 100px auto;
        width: 380px;
    }
</style>