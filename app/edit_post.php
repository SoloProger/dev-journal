<?php require_once('src/app.php'); ?>
<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<?php require_once('views/partials/header.php'); ?>

<?php

$post = getPost($connect, $_GET['postId']);

echo "

<main class='p-20 flex flex-col gap-10'>
    <h3 class='font-bold text-4xl'>Обновить статью</h3>
    <form action='src/forms/edit_post.php?postId={$post['id']}' method='POST' class='flex flex-col gap-4'>
        <input type='text' name='title'  value='{$post['title']}' placeholder='Заголовок' class='border p-4 rounded'>
        <textarea type='text' name='description' cols='10' rows='10' placeholder='Описание' class='border p-4 rounded'>{$post['description']}</textarea>
        <div class='flex justify-end'>
            <button type='submit' class='text-xl button draw'>Обновить</button>
        </div>
    </form>
</main>

"

?>
</body>
</html>
