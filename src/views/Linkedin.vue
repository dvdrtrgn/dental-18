<template lang='pug'>
  -
    var CTA = 'https://retailservices.wellsfargo.com/eforms/request-info?';
    CTA += 'utm_source=wfrshp&utm_medium=cta&utm_campaign=contactus';

  .linkedin
    h1.hide Wells Fargo Health Advantage | LinkedIn Lead Generation Campaign, Dental segment

    nav.fancy.columnize
      h1.hide Bottom navigation
      .logo
        img(src='@/assets/svgs/wf-oneline.svg')
      .cta
        a(href='#CTA') Find out how Wells Fargo can help

    // main.pug
    include ./Linkedin/main.pug
    // foot.pug
    include ./Linkedin/foot.pug
    //
</template>

<style lang='scss'>
/* Linkedin.vue */
@import url('../assets/fonts/index-wf.css');
@import '@/scss/_drt/core.scss';
</style>
