let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {

      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});



$(document).ready(function() {
  var visibleBlogs = 3; // تعداد بلاگ‌های اولیه که قابل نمایش هستند

  // مخفی کردن بلاگ‌های اضافی
  $('.blog-item:gt(' + (visibleBlogs - 1) + ')').hide();

  // نمایش دکمه "More Blogs" و مخفی کردن "Less Blogs"
  $('#more-blogs-button').click(function() {
    $('.blog-item:hidden').slice(0, 3).slideDown();
    if ($('.blog-item:hidden').length === 0) {
      $('#more-blogs-button').fadeOut();
      $('#less-blogs-button').fadeIn();
    }
  });

  // کلیک بر روی دکمه "Less Blogs"
  $('#less-blogs-button').click(function() {
    $('.blog-item:gt(' + (visibleBlogs - 1) + ')').slideUp();
    $('#more-blogs-button').fadeIn();
    $(this).fadeOut();
  });

  // مخفی کردن "Less Blogs" در ابتدا
  $('#less-blogs-button').hide();
});


function validateForm() {
    var fullName = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phoneNumber = document.getElementById('phone').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    var isValid = true;

    if (fullName === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (email === '') {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (phoneNumber === '') {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (subject === '') {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('subjectError').style.display = 'none';
    }

    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    return isValid;
}
