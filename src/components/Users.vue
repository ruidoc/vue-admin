<template>
    <div class="main">
        <reload :show.sync="loading" @reload="reload"></reload>
        <div class="content">
            <!-- <Alert show-icon closable>本项目已经开源到GitHub上，欢迎大家star</Alert> -->
            <div class="handle">
                <Select style="width:100px" v-model="selected">
                    <Option v-for="item in userRole" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Input placeholder="输入用户名..." style="width: 150px" icon="ios-search"></Input>
                <div style="float: right">
                    <Button type="info" icon="android-create">编辑</Button>
                    <Button type="error" icon="android-delete">删除</Button>
                </div>
            </div>
            <Table border :columns="columns" :data="nlist"></Table>
        </div>
        <div class="footer">
            <p class="count">共有 12 条记录</p>
            <Page :total="40" class="page"></Page>
        </div>
    </div>
</template>
<script>

    import Reload from '@/components/Reload';
    import axios from 'axios'
    import moment from 'moment'
    
    export default {
        name: 'Users',
        data() {
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'index',
                        width: 80,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '角色',
                        key: 'role'
                    },
                    {
                        title: '电话',
                        key: 'tel'
                    },
                    {
                        title: '注册时间',
                        key: 'ctime'
                    },
                    {
                        title: '操作',
                        width: 100,
                        align: 'center',
                        render: (h, param)=> {
                            return h('a',{
                                on: {
                                    click: ()=> {
                                        this.sdk()
                                    }
                                } 
                            },'查看')
                        }
                    }
                ],
                lists: [],
                userRole: [
                    {
                        value: '0',
                        label: '全部'
                    },
                    {
                        value: '1',
                        label: '老师'
                    },
                    {
                        value: '2',
                        label: '家长'
                    }
                ],
                loading: true,
                selected: ''
            }
        },
        methods: {
            reload() {
                this.load({});
                this.selected = ''
            },
            load(params) {
                this.loading = true;
                axios.get('http://www.node.com/v1/users',{params}).then((users)=> {
                    this.lists = users.data.data
                    this.loading = false
                }).catch((err)=> {
                    console.log(err)
                });
            },
            sdk() {
                alert(0)
            }
        },
        components: {
            Reload
        },
        computed: {
            nlist() {
                this.lists.forEach((item,i)=> {
                    if (item.role == 1) {
                        this.lists[i].role = '老师'
                    } else {
                        this.lists[i].role = '家长'
                    }
                    this.lists[i].ctime = moment(this.lists[i].ctime).format('YYYY-MM-DD HH:mm:ss')
                })
                return this.lists
            }
        },
        created() {
            this.load({});
        },
        watch: {
            selected(val,oval) {
                if(val != 0) {
                    this.load({
                        'role': val
                    })
                } else {
                    this.load({})
                }
            }
        }
    }
</script>
<style scoped>
    .main {
        position: absolute;
        bottom: 0; top: 0;
        left: 0; right: 0;
    }
    .content {
        padding-top: 12px; 
        position: absolute;
        bottom: 0; top: 55px;
        right: 20px; left: 20px;
    }
    .handle {
        margin-bottom: 12px;
    }
    .footer {
        width: 100%;
        height: 55px;
        line-height: 55px;
        position: absolute;
        bottom: 0px;
        border-top: 1px solid #e9eaec;
    }
    .count {
        float: left;
        padding-left: 25px;
    }
    .page {
        float: right;
        margin-right: 25px;
    }
</style>