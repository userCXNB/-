<template>
    <div class="index">
        <div class="header">
            <div class="logo">
                <a @click="sendSidebar({left:0})"><img src="/src/assets/images/logo.jpg"></a>
            </div>
            <div class="dh"><router-link to="/consultant">我的顾问</router-link><router-link to="/record">我要提问</router-link></div>
            <div class="top_right">
                <div class="pho">
                    <a href="#"><img src="/src/assets/images/ico_pc.jpg"></a>
                </div>
            </div>
        </div>
        <div class="list2">
            <div class="index_left3">
                <div class="title_bg2">
                    <div class="title2">
                        <ul id="tabs1" class="tabs">
                            <li class="sec1">
                                <router-link to="/consultant">我要提问</router-link>
                            </li>
                            <li class="sec2">
                                <router-link to="/record">电话服务记录</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="wytw">
                <div class="tit">我要提问</div>
                <div class="yhdp_con_text">
                    <textarea value="" v-model="msg" @keydown.ctrl="send"></textarea>
                </div>
                <div class="tj">
                    <div class="yhdp_con_zs"> （最多500字）</div>
                    <div class="yhdp_con_tj">
                        <div class="yhdp_btn3"><a href="#" @click="send1">发送</a></div>
                    </div>
                </div>
            </div>
            <div class="stwt">
                <div class="tit"><span>所提问题</span></div>
                <div class="con">
                    <ul>
                        <li v-for="(item) in quizList" :data-id="item.id">
                            <div class="wt">
                                <p>{{item.issue}}</p>
                                <p class="time">{{item.time|date}}</p>
                            </div>
                            <div class="hd">
                                <p>{{item.solve}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "",
      quizList: []
    };
  },
  mounted() {
    this.$http({
      url: "http://localhost:3000/quizList"
    })
      .then(res => {
        this.quizList = res.data.reverse();
      })
      .catch(res => {
        console.log(res, 39);
      });
  },
  methods: {
    ...mapActions(["sendSidebar"]),
    send($event) {
      if ($event.keyCode == 13) {
        if (this.msg != "") {
          this.quizList.unshift({
            id: this.quizList.length + 1,
            issue: this.msg,
            time: 1,
            solve: "请耐心等待解答..."
          });
          //传数据
          console.log(this.quizList.length);
          this.$http({
            url: "http://localhost:3000/quizList",
            method: "post",
            data: {
              a: {
                id: this.quizList.length + 1,
                issue: this.msg,
                time: 1,
                solve: "请耐心等待解答..."
              }
            }
          })
            .then(res => {
              console.log(res.data);
              // this.quizList = res.data;
            })
            .catch(res => {
              console.log(res, 39);
            });
        }
      }
    },
    send1() {
      if (this.msg != "") {
        this.quizList.unshift({
          id: this.quizList.length + 1,
          issue: this.msg,
          time: 1,
          solve: "请耐心等待解答..."
        });
        //传数据
        console.log(this.quizList.length);
        this.$http({
          url: "http://localhost:3000/quizList",
          method: "post",
          data: {
            a: {
              id: this.quizList.length + 1,
              issue: this.msg,
              time: 1,
              solve: "请耐心等待解答..."
            }
          }
        })
          .then(res => {
            console.log(res.data);
            // this.quizList = res.data;
          })
          .catch(res => {
            console.log(res, 39);
          });
      }
    }
  }
};
</script>
<style>
@import "/src/assets/css/consultant.css";
</style>
