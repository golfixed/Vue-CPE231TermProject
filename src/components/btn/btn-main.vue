<template>
    <button :class="color" :type="btntype">{{text}}</button>
</template>

<script>
export default {
    name: "custombutton",
    props: ['color','text','btntype']
}
</script>

<style>
.btn-refresh {
    background-color: #f1f1f1;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 5px 10px;
}
</style>
