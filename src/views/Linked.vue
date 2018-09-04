<style lang='scss'>
@import url("../assets/fonts/index-wf.css");
@import "@/scss/_drt/core.scss";

.linkedin {
}
</style>

<template lang='pug'>
  -
    var CTA = 'https://retailservices.wellsfargo.com/eforms/request-info?';
    CTA += 'utm_source=wfrshp&utm_medium=cta&utm_campaign=contactus';

  .linkedin
    title.hide Wells Fargo Health Advantage | LinkedIn Lead Generation Campaign, Dental segment

    nav.fancy.columnize
      .logo
        img(src='#')
      .cta
        a(href='#CTA') Find out how Wells Fargo can help

    main
      header.inset
        h2.
          Choosing Patient Financing #[br]
          #[span.light Five Helpful Questions to Ask]
        hr
        p.subhead.serif.
          Regardless of the financial provider you choose,
          asking these questions can help you find a program that keeps you smiling.

        nav
          ul.numeral.columnize
            li: a(href='#S1') #[span.numeral 1]
            li: a(href='#S2') #[span.numeral 2]
            li: a(href='#S3') #[span.numeral 3]
            li: a(href='#S4') #[span.numeral 4]
            li: a(href='#S5') #[span.numeral 5]

      div.hero
        img(src='#')

      section#S1.inset
        h3.
          #[span.numeral 1]
          Are the standard patient rates competitive?
        p.
          Not every program’s standard patient rates are the same,
          and you may be surprised at how favorable some are.
          Talk with financing providers about how their annual
          percentage rates (APR) for patients stack up to the competition.

      section#S2.inset.shade
        h3.
          #[span.numeral 2]
          Are approval rates and credit limits competitive?
        p.
          Ask financing companies where their approval rates and credit limits rank among competing programs.
          By choosing a program that approves more patients with enough credit to cover their treatments,
          you’ll help more people get the dental work they need.

        blockquote.outset.fancy
          p.quote.
            Your patients will appreciate that you’re allowing them more treatment options they can afford,
            rather than making a decision based on the cash they have on hand.
          p.author.
            Mark Hosaflook | Business Manager, Indiana Dental Practice

      section#S3.inset
        h3.
          #[span.numeral 3]
          What are my costs to use the financing program?
        p.
          Ask financing providers how their fees compare to others.
          Programs with a full range of financing plans typically charge
          lower fees to use some plans and higher fees for others.
          A program like this helps balance everyone’s costs while
          offering more choice and flexibility for your patients and practice.
          And considering extra costs, like enrollment or service fees,
          will make it easier to compare programs.

      section#S4.inset.shade
        h3.
          #[span.numeral 4]
          Is the program easy for my staff and me to understand and use?
        p.
          A novice wouldn’t crown a tooth without guidance.
          And, your financing provider shouldn’t turn over the program without training you first.
          With the right individually-guided training and real-time personal support seven days a week,
          everyone in your office can feel comfortable using the program and talking about it with patients.

      section#S5.inset
        h3.
          #[span.numeral 5]
          Are there tools and resources to make financing simpler for my staff?
        p.
          Financing programs don’t have to be overly complicated or take too much time.
          Features like paperless processing tools, marketing help, advertising tips and tools,
          and custom reports from your financing provider make it easier.

        blockquote.columnize.widen
          div.tooth
            img(src='#')
          div
            p.
              20% #[br]
              of your dental patients could benefit from patient financing.*
            p.
              Do they know it’s an option?
            small.
              * Dentists: Is your third-party financing working for your practice?,
              DentistryIQ.com, May 2018

      section#CTA.inset
        hr
        p.
          The #[b Wells Fargo Health Advantage® credit card program] can help you do what’s best
          for your patients by providing a fresh approach to patient financing that’s easy to learn,
          easy to use, and easy to manage.

        .center
          .card
            img(src='#')

          h3 Would you like to learn more?

        .columnize.widen
          p.
            #[b.cap Call our sales<br>support team] <br>
            <br>
            #[b 1-800-577-5221] <br>
            Monday – Friday <br>
            7:30 a.m. – 5:30 p.m. <br>
            Central Time <br>
          p.center.
            #[b.cap OR we can call you] <br>
            #[a.fancy(href=`${CTA}` target='_blank') Request a Call]

    footer.fancy
      .links
        a(href="https://www.wellsfargo.com/privacy-security/") PRIVACY, Cookies, Security &amp; Legal
        span &nbsp; | &nbsp;
        a(href="https://retailservices.wellsfargo.com/wfha_veterinarians.html") Home
        span &nbsp; | &nbsp;
        a(href="https://www.wellsfargo.com/about/") Wells Fargo &amp; Company
      p.
        © 2000 – 2018 Wells Fargo Retail Services. All rights reserved.
      p.
        Wells Fargo Retail Services is a division of Wells Fargo Bank, N.A.


</template>
