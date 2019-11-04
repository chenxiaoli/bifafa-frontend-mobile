<template>

<div class="wallet-summary">
    <div >资产折合({{symbol}})</div>
    <div>{{quantity}}</div>
  <div><span>≈</span><span>{{value}} {{currency}}</span></div>
    </div>    

</template>
<script>
export default {
    data(){
        return {}
    },
    props:["symbol","value","quantity","currency"]
    
}
</script>

<style>
.wallet-summary {
    display: flex;
    flex-direction:column;
    text-align: left;
    padding: 20px 16px 20px 16px;
    background: #fff;
}
.wallet-summary div:nth-child(1){
    font-size:12px;
}
.wallet-summary div:nth-child(2){
    font-size:24px;
    line-height: 2em;
}
.wallet-summary div:nth-child(3){
    font-size:12px;
}
</style>
