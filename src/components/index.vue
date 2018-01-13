<template>
    <div class="index">
        <heade></heade>
        <div class="nav">
            <li>
                <router-link to="/apply">我的申请</router-link>
            </li>
            <li>
                <router-link to="/school">我的学校</router-link>
            </li>
            <li>
                <router-link to="/consultant">我的顾问</router-link>
            </li>
        </div>
        <slider></slider>
        <div class="indexCon">
            <p> 留学申请就是先定位选校，然后在各校截止日期前将所申请学校要求的所有材料正确提交。中西方意识形态和文化等方面存在很多差异，对留学国家文化的了解和尊重，是留学生进行无障碍沟通，克服生活困难的一个基础。 所以留学前要对身边其他多种文化的差异有一个很好的认知和理解。
            </p>
            <br>
            <p>
                另外，出国后没有了家人的照顾，会有很多困难，出国前把各种可能发生的情况都想一想，遇到的时候就不会手忙脚乱。
            </p>
        </div>
    </div>
</template>
<script>
    import heade from "./header.vue";
    import slider from "./slider.vue";
    export default {
        name: 'index',
        components: {
            heade,
            slider
        }
    }
</script>
<style>
</style>
