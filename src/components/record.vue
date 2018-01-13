<template>
    <div class="index">
        <div class="header">
            <div class="logo">
                <router-link to="/index"><img src="/src/assets/images/logo.jpg"></router-link>
            </div>
            <div class="dh"><router-link to="/consultant">我的顾问</router-link><router-link to="/record">电话服务记录</router-link></div>
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
            <div class="drth">
                <div class="tit">当日通话</div>
                <div class="yhdp_con_text">
                    <textarea value=""></textarea>
                </div>
                <div class="tj">
                    <div class="yhdp_con_zs"><span class="set_input"><input type="radio" name="review" > 不好 <input type="radio" name="review" > 一般<input type="radio" name="review" > 满意 <input type="radio" name="review" > 非常满意</span></div>
                    <input type="button" value="我要点评" class="button orange">
                </div>
            </div>
            <div class="thqk">
                <div class="tit"><span>用户通话情况</span></div>
                <div class="con">
                    <ul>
                        <li>
                            <div class="wt">
                                <p class="time">2014-8-21 14：09：49</p>
                                <p>美国大学录取学生所依据的标准多达19项，等，精准的定位选校重视程度的差别。</p>
                                <p>评论：<span class="blue">非常满意</span></p>
                            </div>
                        </li>
                        <li>
                            <div class="wt">
                                <p class="time">2014-8-21 14：09：49</p>
                                <p>美国大学录取学生所依据的标准多达19项，等，精准的定位选校重视程度的差别。</p>
                                <p>评论：<span class="blue">非常满意</span></p>
                            </div>
                        </li>
                        <li>
                            <div class="wt">
                                <p class="time">2014-8-21 14：09：49</p>
                                <p>美国大学录取学生所依据的标准多达19项，等，精准的定位选校重视程度的差别。</p>
                                <p>评论：<span class="blue">非常满意</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import '/src/assets/css/consultant.css'
</style>
