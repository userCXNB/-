<template>
    <div class="header">
        <div class="logo">
            <a @click="sendSidebar({left:0})"><img src="/src/assets/images/logo.jpg"></a>
        </div>
        <div class="top_right">
            <div class="user">
                <router-link to="/login"><img src="/src/assets/images/ico1.jpg"></router-link>
                <router-link to="/register"><img src="/src/assets/images/ico2.jpg"></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
    export default {
        methods:mapActions([
            "sendSidebar"
        ])
    }
</script>
