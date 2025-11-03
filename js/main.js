const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const isFront = document.body.classList.contains("front-page");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
};

const changeNavHeight = (height) => {
  navbar.style.height = height;
};

const openMenu = (event) => {
  // функция открывания меню
  menu.classList.add("is-open"); // вешает класс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // запрещаем прокрутку сайта под меню
  lightModeOn();
};

const closeMenu = (event) => {
  // функция закрывания меню
  menu.classList.remove("is-open"); // убирает класс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; // возвращаем прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? changeNavHeight("4.5rem") : changeNavHeight("5.875rem");
  if (isFront) {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
  }
});

mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

const swiperSteps = new Swiper(".steps-slider", {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: ".steps-button-next",
    prevEl: ".steps-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  }
});

const swiper = new Swiper(".features-slider", {
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1057: {
      slidesPerView: 3,
    },

    1306: {
      slidesPerView: 4,
    },

    1590: {
      slidesPerView: 5,
    },
  },
});

const swiperBlog = new Swiper(".blog-slider",{
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1306: {
      slidesPerView: 2,
    },
    1590: {
      slidesPerView: 2,
    },
  }
});



const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) && modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
    }
});

document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && modal.classList.contains("is-open")){
    modal.classList.toggle("is-open");
  }
});


console.log('🔍 Инициализация валидации...');

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll("form");
    console.log('📝 Найдено форм:', forms.length);

    forms.forEach((form) => {
        form.setAttribute('novalidate', true);
        
        const nameField = form.querySelector('[name="username"]');
        const phoneField = form.querySelector('[name="userphone"]');
        
        if (!nameField || !phoneField) {
            console.log('❌ Не найдены поля формы');
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('📤 Проверяем форму...');
            
            let isValid = true;

            // Валидация имени
            if (!nameField.value.trim()) {
                showError(nameField, 'Укажите имя');
                isValid = false;
            } else if (nameField.value.length > 30) {
                showError(nameField, 'Максимум 30 символов');
                isValid = false;
            } else {
                hideError(nameField);
            }

            // Валидация телефона
            if (!phoneField.value.trim()) {
                showError(phoneField, 'Укажите телефон');
                isValid = false;
            } else {
                hideError(phoneField);
            }

            if (isValid) {
                console.log('✅ Форма валидна, отправляем...');
                this.submit();
            }
        });

        // Очистка ошибок при вводе
        [nameField, phoneField].forEach(field => {
            field.addEventListener('input', function() {
                if (this.value.trim()) {
                    hideError(this);
                }
            });
        });
    });
});

function showError(field, message) {
    field.classList.add('is-invalid');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '14px';
    errorElement.style.marginTop = '5px';
}

function hideError(field) {
    field.classList.remove('is-invalid');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}


// const forms = document.querySelectorAll("form"); // собираем все формы
// forms.forEach((form) => {
//   const validation = new JustValidate(form, {
//     errorFieldCssClass: 'is-invalid',
//   });
//   validation
//     .addField("[name=username]", [
//       {
//         rule: 'required',
//         errorMessage: "Укажите Имя"
//       },
//       {
//         rule: 'maxLength',
//         value: 30,
//         errorMessage: "максимально 30 символов"
//       },
//     ])
//     .addField('[name=userphone]', [
//       {
//         rule: 'required',
//         errorMessage: 'Укажите телефон',
//       },
//     ])
//     .onSuccess((event) => {
//       const thisForm = event.target;//наша форма
//       const formData = new FormData(thisForm);// данные из нашей формы
//       const ajaxSend = (formData) => {
//         fetch(thisForm.getAttribute("action"), {
//           method: thisForm.getAttribute("method"),
//           body: formData,
//         }).then((response) => {
//           if (response.ok) {
//             thisForm.reset();
//             alert("форма отправлена!");
//           } else{
//             alert(response.statusText);
//           }
//         });
//       };
//       ajaxSend(formData);
//     });
// });
