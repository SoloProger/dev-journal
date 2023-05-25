<?php require_once('src/app.php'); ?>

<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<main class="p-20 flex flex-col gap-10">
    <h3 class="font-bold text-4xl">Регистрация</h3>
    <form action="src/auth/register.php" method="POST" class="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Имя" class="border p-4 rounded">
        <input type="text" name="surname" placeholder="Фамилия" class="border p-4 rounded">
        <input type="password" name="password" placeholder="Пароль" class="border p-4 rounded">
        <div class="flex justify-end">
            <button type="submit" class="text-xl button draw">Зарегистрироваться</button>
        </div>
    </form>
    <div class="flex justify-center">
        <p>Есть аккаунт? <a href="login.php" class="underline cursor-pointer">Авторизуйтесь!</a></p>
    </div>
</main>
</body>
</html>
