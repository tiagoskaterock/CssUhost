<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">    
    <title>uHost</title>
    <link rel="shortcut icon" href="images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
    <link rel="stylesheet" href="css/shared.css">
    <link rel="stylesheet" href="css/packages.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/modal.css">
    <link rel="stylesheet" href="css/customers.css">
</head>

<body>
    <div class="backdrop"></div>

    <div class="modal">
        <h1 class="modal__title">Do you want to continue?</h1>
        <div class="modal__actions">
            <a href="start-hosting/index.html" class="modal__action">Yes!</a>
            <button class="modal__action modal__action--negative" type="button">No!</button>
        </div>
    </div>
    
    <header class="main-header">



        <!-- Button -->
        <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
        </button>
        <!-- End Button -->




        <div>
            <a href="." class="main-header__brand">
                <img src="images/uhost-icon.png" alt="uHost - Your favorite hosting company">
            </a>
        </div>


        
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item">
                    <a href="packages">Packages</a>
                </li>
                <li class="main-nav__item">
                    <a href="customers">Customers</a>
                </li>
                <li class="main-nav__item main-nav__item--cta">
                    <a href="start-hosting">Start Hosting</a>
                </li>
            </ul>
        </nav>



    </header>



    <nav class="mobile-nav">
        <ul class="mobile-nav__items">
            <li class="mobile-nav__item">
                <a href="packages">Packages</a>
            </li>
            <li class="mobile-nav__item">
                <a href="customers">Customers</a>
            </li>
            <li class="mobile-nav__item mobile-nav__item--cta">
                <a href="start-hosting">Start Hosting</a>
            </li>
        </ul>
    </nav>