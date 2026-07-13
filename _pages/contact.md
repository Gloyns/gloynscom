---
layout: default
title: Contact
description: "Get in touch to discuss SEO, AI search visibility, or how I can help your brand grow its search presence."
permalink: /contact/
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://gloyns.com/contact/#webpage",
      "url": "https://gloyns.com/contact/",
      "name": "Contact Andrew Gloyns",
      "isPartOf": { "@id": "https://gloyns.com/#website" },
      "description": "Get in touch with Andrew Gloyns for SEO and AI search consulting.",
      "breadcrumb": { "@id": "https://gloyns.com/contact/#breadcrumb" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://gloyns.com/contact/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gloyns.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact" }
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "Gloyns Consulting",
      "url": "https://gloyns.com/",
      "telephone": "+61416694979",
      "email": "andrew@gloyns.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "founder": { "@id": "https://gloyns.com/#andrew" }
    }
  ]
}
</script>

<div class="container animate">
  <div class="contact-hero">
    <div class="contact-hero__left">
      <h1 class="contact-hero__title">Let's talk about your search.</h1>
      <p class="contact-hero__description">The best place to start is a 30-minute discovery call. This is just a conversation about where you are, where you want to get to, and whether I'm the right person to help.</p>
      <p class="contact-hero__description">Book a time directly, or send me a quick message below and I'll reply with a link.</p>
      <p class="contact-hero__note">If I'm not the right fit, I'll let you know and do my best to point you in the right direction.</p>
      <div class="hero__buttons">
        <a href="https://calendly.com/gloyns/discovery-call" class="button button--primary" target="_blank" rel="noopener">Schedule a call</a>
        <a href="#contact-form" class="button button--outline">Send a message</a>
      </div>
    </div>
  </div>
</div>

<div class="container animate">
  <div class="contact-next">
    <h3 class="contact-next__title">What to expect from a first conversation.</h3>
    <div class="contact-next__grid">
      <div class="contact-next__card">
        <span class="contact-next__number">01</span>
        <h4 class="contact-next__card-title">We talk about your business</h4>
        <p class="contact-next__card-description">Your current search visibility, your team, what you've tried, and what's not working.</p>
      </div>
      <div class="contact-next__card">
        <span class="contact-next__number">02</span>
        <h4 class="contact-next__card-title">I share my honest feedback</h4>
        <p class="contact-next__card-description">What I see, what I'd prioritise, and whether the kind of work I do is a good match for where you are.</p>
      </div>
      <div class="contact-next__card">
        <span class="contact-next__number">03</span>
        <h4 class="contact-next__card-title">We decide if it makes sense</h4>
        <p class="contact-next__card-description">If there's a fit, we talk about what an engagement might look like. If there isn't, I'll try to point you somewhere useful.</p>
      </div>
    </div>
  </div>
</div>

<div class="container animate" id="contact-form">
  <div class="contact-form">
    <h2 class="contact-form__heading">Tell me what you're working on.</h2>

    <form action="https://formspree.io/f/mqegrkoy" method="POST">
      <input type="hidden" name="_next" value="https://gloyns.com/contact/thank-you/">
      <input type="text" name="_gotcha" style="display:none">

      <div class="contact-form__grid">
        <div class="contact-form__field">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required>
        </div>

        <div class="contact-form__field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required>
        </div>

        <div class="contact-form__field contact-form__field--full">
          <label for="message">What are you looking to get help with?</label>
          <textarea id="message" name="message" placeholder="Tell me a bit about what you're working on and what you're trying to solve..." required></textarea>
        </div>

        <div class="contact-form__field">
          <label for="referral">How did you find me? <span class="contact-form__optional">optional</span></label>
          <input type="text" id="referral" name="referral" placeholder="Google, referral, LinkedIn...">
        </div>
      </div>

      <button type="submit" class="contact-form__submit">Send message</button>
    </form>

    <!-- TODO-ANDREW: confirm email should be published -->
    <p class="contact-form__email-note">Prefer email? <a href="mailto:andrew@gloyns.com">andrew@gloyns.com</a></p>
  </div>
</div>
