<?php require_once('src/app.php'); ?>

<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<main class="p-20 flex flex-col gap-10">
    <h3 class="font-bold text-4xl">Авторизация</h3>
    <form action="src/auth/login.php" method="POST" class="flex flex-col gap-4">
        <input type="text" name="login" placeholder="Логин" class="border p-4 rounded">
        <span class="text-sm">Логин выдается при регистрации</span>
        <input type="password" name="password" placeholder="Пароль" class="border p-4 rounded">
        <div class="flex justify-end">
            <button type="submit" class="text-xl button draw">Авторизоваться</button>
        </div>
    </form>
    <div class="flex justify-center">
        <p>Нет аккаунта? <a href="register.php" class="underline cursor-pointer">Зарегистрируйтесь!</a></p>
    </div>
</main>
</body>
</html>
