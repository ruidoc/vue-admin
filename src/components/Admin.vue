<template>
    <div class="main">
        <reload :show.sync="status.loading" @reload="reload"></reload>
        <div class="content">
            <div class="handle">
                <Button type="success" icon="plus-round" @click="status.addModel = true">添加管理员</Button>
            </div>
            <Table border :columns="columns" :data="nlist"></Table>
        </div>
        <div class="footer">
            <p class="count">共有 12 条记录</p>
            <Page :total="40" class="page"></Page>
        </div>
        <Modal v-model="status.addModel" title="添加管理员" class="hide_footer">
            <div style="padding: 10px 30px 0 0">
            <Form :model="model" :label-width="80">
                <Form-item label="名称">
                    <Input type="text" v-model="model.name" placeholder="请输入管理员名称"></Input>
                </Form-item>
                <Form-item label="级别">
                    <Select v-model="model.type" placeholder="请选择">
                        <Option value="1">超级管理员</Option>
                        <Option value="2">普通管理员</Option>
                    </Select>
                </Form-item>
                <Form-item label="密码">
                    <Input type="password" v-model="model.pass" placeholder="请输入管理员密码"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="submit()">提交</Button>
                    <Button type="ghost" @click="model=null" style="margin-left: 8px">重置</Button>
                </Form-item>
            </Form>
            </div>
        </Modal>
        <Modal v-model="status.editModel" title="编辑管理员" class="hide_footer">
            <div style="padding: 10px 30px 0 0">
            <Form :model="model" :label-width="80">
                <Form-item label="名称">
                    <Input type="text" v-model="model.name" placeholder="请输入管理员名称"></Input>
                </Form-item>
                <Form-item label="级别">
                    <Select v-model="model.type" placeholder="请选择" :value="2">
                        <Option value="1">超级管理员</Option>
                        <Option value="2">普通管理员</Option>
                    </Select>
                </Form-item>
                <Form-item label="密码">
                    <i-switch size="large" @on-change="passwich">
                        <span slot="open">修改</span>
                        <span slot="close">不变</span>
                    </i-switch>
                    <Input type="password" v-model="model.pass" placeholder="请输入管理员密码" v-show="status.pass"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="submit()">提交</Button>
                    <Button type="ghost" @click="model=null" style="margin-left: 8px">重置</Button>
                </Form-item>
            </Form>
            </div>
        </Modal>

    </div>
</template>
<script>
    
    import Reload from '@/components/Reload';
    import axios from 'axios'
    
    export default {
        name: 'Admins',
        data() {
            return {
                columns: [
                    {
                        type: 'index',
                        width: 80,
                        align: 'center'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '级别',
                        key: 'type'
                    },
                    {
                        title: '操作',
                        width: 200,
                        align: 'center',
                        render: (h, param)=> {
                            return h('div',[
                                h('a',{
                                    on: {
                                        click:()=> {
                                            this.edit(param.row)
                                        }
                                    }
                                },'编辑'),
                                h('span',{
                                    style: {
                                        padding: '0 5px',
                                        color: '#ddd'
                                    },
                                },'|'),
                                h('a',{
                                    style: {
                                        color: '#ed3f14'
                                    },
                                    on: {
                                        click:()=> {
                                            this.delete(param.row._id)
                                        }
                                    }
                                },'删除')
                            ])
                        }
                    }
                ],
                lists: [],
                status: {
                    loading: true,
                    addModel: false,
                    editModel: false,
                    pass: false
                },
                model: {}
            }
        },
        methods: {
            reload() {
                this.load({});
            },
            load(params) {
                this.status.loading = true;
                axios.get('http://www.node.com/admin/admins/',{params}).then(
                    result => {
                        if (result.data.code == 200) {
                            this.lists = result.data.data
                        }
                        this.status.loading = false
                    }
                ).catch((err)=> {
                    console.log(err)
                });
            },
            submit() {
                let data = this.model
                axios.post('http://www.node.com/admin/admins/',
                    data
                ).then(result => {
                    console.log(result.data)
                    if (result.data.code == 200) {
                        this.$Message.success('添加成功');
                        this.status.addModel = false
                        this.load({})
                    } 
                    if (result.data.code == 205) {
                        this.$Message.error('管理员已存在');
                    } else {
                        this.$Message.error('添加失败');
                    }
                }).catch(
                    err => console.log(err)
                );
            },
            edit(item) {
                this.model = item;
                console.log(item)
                this.status.editModel = true
            },
            delete(id) {
                axios.delete('http://www.node.com/admin/admins/',{
                    data: {id}
                }).then(result => {
                    if (result.data.ok == 1) {
                        this.$Message.success('删除成功');
                        this.status.addModel = false
                        this.load({})
                    } else {
                        this.$Message.error('删除失败');
                    }
                }).catch(
                    err => console.log(err)
                );
            },
            rowClassName(row, index) {
                if (index == 1) {
                    return 'tirle_rol';
                }
            },
            passwich(bool) {
                if (bool) {
                    this.status.pass = true
                } else {
                    this.status.pass = false
                }
            }
        },
        components: {
            Reload
        },
        computed: {
            nlist() {
                this.lists.forEach((item,i)=> {
                    if (item.type == 1) {
                        this.lists[i].type = '超级管理员'
                    } else {
                        this.lists[i].type = '普通管理员'
                    }
                })
                return this.lists
            }
        },
        created() {
            this.load({});
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
        bottom: 55px; top: 55px;
        right: 20px; left: 20px;
        overflow: scroll;
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