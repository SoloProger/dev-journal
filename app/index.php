<?php require_once('src/app.php'); ?>

<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<?php require_once('views/partials/header.php'); ?>
<main class="w-full flex flex-col gap-40 mb-20">
    <section class="flex justify-center items-center gap-28">
        <div class="flex flex-col gap-10 w-2/4">
            <h1 class="font-bold text-5xl">
                Hi, I am John, Creative Technologist
            </h1>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
            </p>
        </div>
        <img src="assets/images/book.jpg" alt="" class="rounded-full w-[245px] h-[240px]"/>
    </section>
    <section class="flex flex-col py-7 px-36 gap-5">
            <span class="flex items-center justify-between p-6">
                <h5>Последние посты</h5>
                <a href="blog.php" class="item-link">Посмотреть все</a>
            </span>
        <div class='flex gap-5'>
            <?php

            $latestPosts = getLatestPosts($connect);

            foreach ($latestPosts as $latestPost) {

                $description = textLimit($latestPost['description'], 10, 150);

                echo "
            <div class='flex flex-col bg-white gap-8 p-6 w-full '>
                        <span class='flex items-center justify-between'>
                            <h3 class='font-bold text-2xl cursor-pointer'>
                                <a href='post.php?postId={$latestPost['id']}' class='item-link'>{$latestPost['title']}</a>
                            </h3>
                        </span>
                <div class='flex gap-7'>
                    <span class='date'>Дата</span>
                    <span>Категория</span>
                </div>
                <p>$description</p>
                <hr>
            </div>
        ";
            } ?>
        </div>
    </section>
</main>
</body>
</html>