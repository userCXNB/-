<template>
    <div class="index">
        <div class="header">
            <div class="logo">
                <router-link to="/index"><img src="/src/assets/images/logo.jpg"></router-link>
            </div>
            <div class="dh">
                <router-link to="/enter">目标选择</router-link>
            </div>
            <div class="top_right">
                <div class="pho">
                    <a href="#"><img src="/src/assets/images/ico_pc.jpg"></a>
                </div>
            </div>
        </div>
        <div class="list" v-cloak>
            <div class="xx_con">
                <ul>
                    <li>合计:${{getCome}}</li>
                    <li v-for="(item,index) of getCourse" :key="index">
                        <span>{{item.course}}</span>
                        <i>
                                        <input type="button" value="加" @click="add(index)">
                                        数量:{{item.num}}
                                        <input type="button" value="减" @click="minus(index)">
                                        <input type="button" value="删除" @click="del(index)">
                                    </i>
                        <a href="#">${{item.price}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapActions,
        mapGetters
    } from "vuex";
    export default {
        data() {
            return {
                come: 0
            }
        },
        watch: {
            getCourse: function() {
                console.log('2324234')
            }
        },
        methods: mapActions([
            "add", "minus", "del"
        ]),
        computed: {
            ...mapGetters([
                "getCourse", "getCome"
            ]),
        }
    }
</script>
<style>
    @import url(/src/assets/css/enter.css);
</style>
