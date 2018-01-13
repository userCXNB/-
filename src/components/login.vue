<template>
    <div class="index">
        <heade></heade>
        <div class="list">
            <div class="login_con">
                <ul>
                    <li><label>邮箱</label>
                        <p><input v-model="mailBox" type="text" size="20" class="login_name_input" placeholder=""></p>
                        <p>{{mailBoxHint}}</p>
                    </li>
                    <li><label>密码</label>
                        <p><input v-model="passWord" type="password" size="20" class="login_name_input" placeholder=""></p>
                        <p>{{passWordHint}}</p>
                    </li>
                </ul>
                <div class="cont_input">
                    <input type="button" value="登 陆" class="button orange" @click="login">
                    <input type="button" value="忘记密码" class="button orange">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import heade from "./header.vue"
    export default {
        data() {
            return {
                mailBox: "",
                passWord: "",
                mailBoxHint: "输入你在西游计注册的邮箱",
                passWordHint: "输入与你注册邮箱相匹配的密码"
            }
        },
        watch: {
            mailBox: function(res) {
                var temp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(res)
                if (!temp && res.length != 0) {
                    this.mailBoxHint = "请继续完善！！！"
                } else if (res.length == 0) {
                    this.mailBoxHint = "输入你在西游计注册的邮箱"
                } else {
                    this.mailBoxHint = `您已成功输入`
                }
            },
            passWord(res) {
                if (res.length >= 1 && res.length < 6) {
                    this.passWordHint = `您已输入${res.length}位`
                } else if (res.length >= 6) {
                    this.passWordHint = `您已成功输入`
                } else {
                    this.passWordHint = `输入与你注册邮箱相匹配的密码`
                }
            }
        },
        methods: {
            login() {
                //   this.$router.push({path:'/index'})
                var temp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.mailBox)
                if (temp && this.passWord.length >= 6) {
                    console.log('wode')
                    var obj = {
                        mailBox: this.mailBox,
                        passWord: this.passWord
                    }
                    this.$http({
                        url: "http://localhost:3000/users/login",
                        method: 'post',
                        data: {
                            a: obj
                        }
                    }).then((res) => {
                        if (res.data.error == 1) {
                            alert(res.data.hint)
                        } else {
                            alert(res.data.hint)
                        }
                    }).catch((res) => {
                        console.log(res, "reg")
                    })
                }
            }
        },
        components: {
            heade
        }
    }
</script>
<style>
    @import url(/src/assets/css/login.css);
</style>
