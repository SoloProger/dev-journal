<?php require_once('src/app.php'); ?>
<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<?php require_once('views/partials/header.php'); ?>
<main class="p-20 flex flex-col gap-10">
    <h3 class="font-bold text-4xl">Добавить статью</h3>
    <form action="src/forms/add_post.php" method="POST" class="flex flex-col gap-4">
        <input type="text" name="title" placeholder="Заголовок" class="border p-4 rounded">
        <textarea type="text" name="description" placeholder="Описание" class="border p-4 rounded"></textarea>
        <div class="flex justify-end">
            <button type="submit" class="text-xl button draw">Добавить</button>
        </div>
    </form>
</main>
</body>
</html>
