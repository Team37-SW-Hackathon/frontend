<template>
    <div id="app">
      <CommonHeader />
      <NumberList />
      <RadioText/>
    </div>
  </template>
    

<script>
import CommonHeader from './components/common/CommonHeader';
import NumberList from './components/common/NumberListComponent';
import RadioText from './components/common/RadioText';

export default{
    name:'App',
    components: {
        CommonHeader,
        NumberList,
        RadioText
    }
}
</script>

<style>
html.body{padding:0; margin:0;}
</style>
