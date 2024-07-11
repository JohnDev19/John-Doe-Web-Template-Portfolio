document.addEventListener('DOMContentLoaded', () => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 200,
      });

      // Project Images
      const projectImages = document.querySelectorAll('.project img');
      projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
          setTimeout(() => {
            img.style.filter = 'grayscale(0%)';
          }, 200);
        });
        img.addEventListener('mouseout', () => {
          img.style.filter = 'grayscale(100%)';
        });
      });

      function updateDate() {
        const now = new Date();
        const options = {
          weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
        };
        const formattedDate = now.toLocaleDateString('en-US', options);
        document.getElementById('current-date').textContent = formattedDate;
      }
      updateDate();
      setInterval(updateDate, 60000);
    });

    // Testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.style.display = 'block';
          setTimeout(() => {
            testimonial.classList.add('active');
          }, 10);
        } else {
          testimonial.classList.remove('active');
          setTimeout(() => {
            testimonial.style.display = 'none';
          }, 500);
        }
      });
    }

    prevButton.addEventListener('click', () => {
      const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      testimonials[currentTestimonial].classList.remove('active');
      setTimeout(() => {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = prevIndex;
        showTestimonial(currentTestimonial);
      }, 500);
    });

    nextButton.addEventListener('click', () => {
      const nextIndex = (currentTestimonial + 1) % testimonials.length;
      testimonials[currentTestimonial].classList.remove('active');
      setTimeout(() => {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = nextIndex;
        showTestimonial(currentTestimonial);
      }, 500);
    });

    showTestimonial(currentTestimonial);

    const links = document.querySelectorAll('nav a');

    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop;

      window.scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Date
    document.addEventListener('DOMContentLoaded', function () {
      function updateTime() {
        const now = new Date();
        const options = {
          hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
        };
        const formattedTime = now.toLocaleTimeString('en-US', options);
        document.getElementById('current-time').textContent = formattedTime;
      }

      updateTime();
      setInterval(updateTime, 1000);
    });

    // Back-To-Top
    let backToTopButton = document.getElementById("backToTop");

    window.onscroll = function() {
      scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }

    backToTopButton.onclick = function() {
      backToTopButton.classList.add('clicked');
      setTimeout(() => {
        backToTopButton.classList.remove('clicked');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 300);
    }

    // Newsletter form submission
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('email').value;
      // Here you would typically send the email to your server
      document.getElementById('newsletter-message').textContent = 'Thanks for subscribing!';
      document.getElementById('email').value = '';
    });
    
// MIT License
// Copyright (c) 2024 JohnDev19

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//;OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.