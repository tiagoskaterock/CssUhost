<?php include "includes/header.php"; ?>

<main class="signup-page">
    <h1 class="signup-title">Awesome! Let's dive right in!</h1>

    <form action="#" class="signup-form">
        <label for="title">Title</label>
        <select id="title">
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
        </select>
        <label for="first-name">First name</label>
        <input type="text" id="first-name">
        <label for="last-name">Last name</label>
        <input type="text" id="last-name">
        <label for="email">E-Mail</label>
        <input type="email" id="email">
        <label for="password">Password</label>
        <input type="password" id="password">
        <input type="checkbox" id="agree-terms">
        <label for="agree-terms">Agree to
            <a href="#">Terms &amp; Conditions</a>
        </label>
        <button type="submit" class="button">Sign Up</button>
    </form>
    
</main>

<?php include "includes/footer.php"; ?>