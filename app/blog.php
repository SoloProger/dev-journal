<?php require_once('src/app.php'); ?>
<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<?php require_once('views/partials/header.php'); ?>
<main class="w-full flex flex-col max-w-4xl m-auto">
    <div class="flex items-center justify-between mb-20">
        <h1 class="font-bold text-5xl">Блог</h1>
        <a href="add_post.php" class="button draw">Добавить</a>
    </div>
    <section>
        <?php

        $posts = getPosts($connect);


        foreach ($posts as $post) {
            $description = textLimit($post['description'], 10, 200);

            echo "
                <div class='flex flex-col bg-white gap-8 p-6 w-full '>
                    <span class='flex items-center justify-between'>
                        <h3 class='font-bold text-2xl cursor-pointer'>
                            <a href='post.php?postId={$post['id']}'>{$post['title']}</a>
                        </h3>
                        <span class='flex gap-4'>
                            <a href='edit_post.php?postId={$post['id']}' class='button draw'>Редактировать</a>
                            <a href='src/forms/remove_post.php?postId={$post['id']}' class='button draw'>Удалить</a>
                        </span>
                    </span>
                    <div class='flex gap-7'>
                        <span class='date'>Дата</span>
                        <span>Категория</span>
                    </div>
                    <p>$description</p>
                    <hr>
                </div>";
        }

        ?>


    </section>
</main>
</body>
</html>
