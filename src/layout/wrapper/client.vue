<template>
        <MenuClient></MenuClient>
        <div class="content">
            <router-view></router-view>
        </div>
        <BotClient></BotClient>
</template>
<script>
import MenuClient from "../../layout/components/MenuClient.vue";
import BotClient from "../../layout/components/BotClient.vue";
export default {
    name: "app",
    components: {
     MenuClient, BotClient
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
</style>