<template lang="pug">
  -
    var CTA = 'https://retailservices.wellsfargo.com/eforms/request-info?';
    CTA += 'utm_source=wfrshp&utm_medium=cta&utm_campaign=contactus';

  .linkedin
    h1.hide Wells Fargo Health Advantage | LinkedIn Lead Generation Campaign, Dental segment

    nav.fancy.columnize
      .logo
        img(src='@/assets/svgs/wf-oneline.svg')

      h1.hide.
        Bottom navigation

      .cta
        a(href='#CTA') Find out how Wells Fargo can help

    // main.pug
    include ./Linkedin/main.pug
    // foot.pug
    include ./Linkedin/foot.pug
    //
</template>

<style lang="scss">
/* Linkedin.vue */
@import url('../assets/fonts/index-wf.css');
@import '@/scss/_linkedin/core.scss';
</style>
