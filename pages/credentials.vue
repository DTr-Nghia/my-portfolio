<template lang="">
    <div class="max-w-[1170px] mx-auto xsm:px-[20px] xl:px-0 pt-[40px]">
        <div class="flex gap-[80px] lg:flex-row flex-col">
            <InfoCard/>
            <InfoCredentialDetail/>
        </div>
    </div>
</template>
<script>
import InfoCard from '~/components/InfoCard.vue';
import InfoCredentialDetail from '~/components/InfoCredentialDetail.vue'
export default {
    components: {
        InfoCard,
        InfoCredentialDetail,
    }
}
</script>
<style lang="">
    
</style>