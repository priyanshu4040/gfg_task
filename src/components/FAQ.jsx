import React from "react";
import './FAQ.css'


function FAQ() {
  return (

    <section class="faq">
      <h2>FAQs</h2>
      <div class='faq-box'>
        <div class="faq-item">
          <button class="faq-question">What is PyHack?</button>
        </div>
        <div class="faq-item">
          <button class="faq-question">Where will the workshops be held?</button>
        </div>
        <div class="faq-item">
          <button class="faq-question">What will I learn at PyHack?</button>
        </div>
        <div class="faq-item">
          <button class="faq-question">Do I need prior Python experience?</button>
        </div>
        <a href="#" class="see-more">See More →</a>
      </div>
    </section>
  );
}

export default FAQ;