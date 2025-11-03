<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="css/swiper-bundle.min.css" />
  <link rel="stylesheet" href="css/normalize.css" />
  <link rel="stylesheet" href="css/style.css" />
  <title>О комапнии - Aliance Production</title>
</head>

<body>
  <?php include_once('mobilemenu.php') ?>
  <nav class="navbar navbar-light">
    <a href="#" class="mobile-menu-toggle">
      <div class="mobile-menu-line"></div>
      <div class="mobile-menu-line"></div>
      <div class="mobile-menu-line"></div>
    </a>
    <a href="./" class="header-logo">
      <svg class="logo-svg logo-light">
        <use href="img/sprite.svg#logo-light"></use>
      </svg>
      <svg class="logo-svg logo-dark">
        <use href="img/sprite.svg#logo-dark"></use>
      </svg>
    </a>
    <ul class="header-nav">
      <li class="header-nav-item">
        <a href="./about.php" class="header-nav-link">О компании</a>
      </li>
      <li class="header-nav-item">
        <a href="./contract.php" class="header-nav-link">Контрактное производство</a>
      </li>
      <li class="header-nav-item">
        <a href="./trademark.php" class="header-nav-link">Собственные торговые марки</a>
      </li>
      <li class="header-nav-item">
        <a href="./news.php" class="header-nav-link">Новости</a>
      </li>
      <li class="header-nav-item">
        <a href="./contacts.php" class="header-nav-link">Контакты</a>
      </li>
    </ul>
    <div class="header-phone">
      <svg class="phone-icon" width="24" height="24">
        <use href="img/sprite.svg#phone"></use>
      </svg>
      <a href="tel:+74996861014" class="header-phone-link">+7 (499) 686-10-14</a>
    </div>
    <!-- /.header-phone -->
    <button class="navbar-button button" data-toggle="modal">
      <svg class="button-icon" width="24" height="24">
        <use href="img/sprite.svg#phone"></use>
      </svg>
      <span class="button-text">Получить консультацию</span>
    </button>
  </nav>
  <div class="header-seporator">
    <div class="bg-grey header-seporator-section">
      <div class="container">
        <div class="seporator"></div>
        <div class="header-seporator-wrapper">
          <div class="text-section">
          <h1 class="header-seporator-title">О компании</h1>
          <div class="header-seporator-crumbs">
            <p class="grey-text">Главная</p>
            <div class="hor-seporator"></div>
            <p class="dark-text">О компании</p>
          </div>
        </div>
        <div class="image-section">
          <!-- <img src="/img/auto-him-header.png" alt="auto-him" class="header-seporator-image"> -->
        </div>
        </div>
      </div>
    </div>
  </div>
  <?php include_once('footer.php');?>