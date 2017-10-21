<template>
    <div class="main">
        <div class="title">
            <p>用户管理</p>
            <Tooltip content="刷新" placement="left" class="reload">
                <Button type="ghost" style="background: #fff" @click="reload"><Icon type="refresh"></Icon></Button>
            </Tooltip>
        </div>
        <Spin size="large" fix v-show="show" class="loading"></Spin>
    </div>
</template>

<script>
    export default {
        name: 'Reload',
        props: ['show'],
        methods: {
            reload() {
                this.$emit('reload');
            }
        } 
    }
</script>

<style scoped>
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
    .loading {
        background: rgba(255,255,255,0.5);
    }
</style>