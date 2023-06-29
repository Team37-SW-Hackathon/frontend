<template>
    <div id = "app">
        <MakePage />
    </div>
</template>

<script>
import MakePage from './views/QuizMakePage';

export default {
    name:'App',
    components: {
        MakePage,
    }
}
</script>

<style>
html.body{padding:0; margin:0;}
</style>
