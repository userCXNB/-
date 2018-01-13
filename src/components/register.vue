<template>
    <div class="index">
        <heade></heade>
        <div class="list">
            <div class="login_con">
                <ul>
                    <li><label>姓名</label>
                        <p><input v-model="userName" type="tel" size="20" class="login_name_input" placeholder=""></p>
                        <p>请填写正确姓名，格式为HanMeimei</p>
                    </li>
                    <li><label>电子邮箱</label>
                        <p><input v-model="mailBox" type="tel" size="20" class="login_name_input" placeholder=""></p>
                        <p>{{mailBoxHint}}</p>
                    </li>
                    <li><label>手机</label>
                        <p><input v-model="moble" type="number" size="20" class="login_name_input" placeholder=""></p>
                        <p>{{mobleHint}}</p>
                    </li>
                    <li><label>创建密码</label>
                        <p><input v-model="passWord" type="password" size="20" class="login_name_input" placeholder="请输入密码"></p>
                        <p>{{passWordHint}}</p>
                    </li>
                    <li><label>我目前是</label>
                        <p><select name="" class="nj" v-model="options">
                                    <option value="1">高一</option>
                                    <option value="2">高二</option>
                                    <option value="3">高三</option>
                                </select></p>
                    </li>
                    <li>
                        <p style="color:#424242"><input v-model="check" type="checkbox" data-role="none" name="mt" id="yes"> 我已阅读并同意<span :style="checkHint">西游记条款</span></p>
                    </li>
                </ul>
                <div class="cont_input">
                    <input type="button" value="注 册" class="button orange" @click="reg" :style="loginHint">
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
                userName: "",
                mailBox: "",
                moble: "",
                passWord: "",
                options: "1",
                check: "",
                userNameHint: "",
                mailBoxHint: "请填写电子邮箱",
                mobleHint: "请填写11位手机号码",
                passWordHint: "请填写6位以上密码",
                optionsHint: "",
                checkHint: "color:#B22222",
                loginHint: ''
            }
        },
        components: {
            heade
        },
        watch: {
            //邮箱
            mailBox(res) {
                var temp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(res)
                if (!temp && res.length != 0) {
                    this.mailBoxHint = "请继续完善！！！"
                } else if (res.length == 0) {
                    this.mailBoxHint = "请填写电子邮箱"
                } else {
                    this.mailBoxHint = `您已成功输入`
                }
            },
            //手机号
            moble(res) {
                console.log(res.length)
                if (res.length >= 1 && res.length < 11) {
                    this.mobleHint = `您已输入${res.length}位`
                } else if (res.length == 11) {
                    this.mobleHint = `您已成功输入`
                } else if (res.length == 0) {
                    this.mobleHint = `请填写11位手机号码`
                } else {
                    this.mobleHint = `输入有误请重新输入！！！`
                }
            },
            //密码       
            passWord(res) {
                if (res.length >= 1 && res.length < 6) {
                    this.passWordHint = `您已输入${res.length}位`
                } else if (res.length >= 6) {
                    this.passWordHint = `您已成功输入`
                } else if (res.length == 0) {
                    this.passWordHint = `请填写6位以上密码`
                } else {
                    this.passWordHint = `输入有误请重新输入！！！`
                }
            },
            check(res) {
                console.log(res)
                if (res) {
                    this.checkHint = `color:#4876FF`
                } else {
                    this.checkHint = `color:#B22222`
                }
            }
        },
        methods: {
            reg() {
                var temp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.mailBox)
                if (this.userName.length != 0 && temp && this.moble.length == 11 && this.passWord.length >= 6 && this.check == true) {
                    this.loginHint = ``
                    var obj = {
                        userName: this.userName,
                        mailBox: this.mailBox,
                        moble: this.moble,
                        passWord: this.passWord,
                        options: this.options
                    }
                    //发往后端数据
                    this.$http({
                        url: "http://localhost:3000/users/reg",
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
                } else {
                    this.loginHint = `background:#B22222`
                }
            }
        }
    }
</script>
<style>
    @import url(/src/assets/css/login.css)
</style>
