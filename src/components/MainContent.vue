<template>
    <div class="main">
        <div class="title">
            <p>用户管理</p>
            <Tooltip content="刷新" placement="left" class="reload">
                <Button type="ghost" style="background: #fff" @click="reload"><Icon type="refresh"></Icon></Button>
            </Tooltip>
        </div>
        <Spin size="large" fix v-show="loading" class="loading"></Spin>
        <div class="content">
            <Alert show-icon closable>本项目已经开源到GitHub上，欢迎大家star</Alert>
            <div class="handle">
                <Select style="width:100px">
                    <Option v-for="item in userRole" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
                <Input placeholder="输入用户名..." style="width: 150px" icon="ios-search"></Input>
                <div style="float: right">
                    <Button type="info" icon="android-create">编辑</Button>
                    <Button type="error" icon="android-delete">删除</Button>
                </div>
            </div>
            <Table border :columns="columns1" :data="data1"></Table>

        </div>
    </div>
</template>
<script>
    
    var data = {
        columns1: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: '姓名',
                key: 'name'
            },
            {
                title: '年龄',
                key: 'age'
            },
            {
                title: '地址',
                key: 'address'
            }
        ],
        data1: [
            {
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居'
            },
            {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗'
            },
            {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道'
            },
            {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道'
            }
        ],
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
        loading: false
    }
    export default {
        name: 'MainContent',
        data() {
            return data
        },
        methods: {
            reload() {
                this.loading = true;
                setTimeout(()=> {
                    this.loading = false;
                    this.$Message.success('刷新成功');
                },1500)
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
    .title {
        border-bottom: 1px solid #e9eaec;
        padding: 10px 0 7px 0;
        margin: 0 20px;
    }
    .title p {
        font-size: 25px;
        display: inline-block;
        font-weight: normal;
    }
    .title .reload {
        float: right;
        margin-top: 3px;
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
    .flr {
        float: right;
    }

    .footer {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        font-size: 15px;
        color: #999;
        text-align: center;
        padding: 15px 0;
    }
    @keyframes gogogo {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .loading {
        background: rgba(255,255,255,0.8);
    }
</style>