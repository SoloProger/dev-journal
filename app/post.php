<?php require_once('src/app.php'); ?>

<!doctype html>
<html lang="en">
<?php require_once('views/partials/head.php'); ?>
<body>
<?php require_once('views/partials/header.php'); ?>

<?php

$post = getPost($connect, $_GET['postId']);

echo "
<main class='w-full  max-w-4xl m-auto p-6 flex flex-col gap-10 justify-center'>
    <section class='flex flex-col gap-8 justify-center'>
        <h2 class='text-4xl font-bold'>{$post['title']}<h2>
        <div class='flex flex-col gap-10'>
            <div class='flex items-center gap-5 text-xl'>
                <span>12 Feb 2019</span>
                <span class='text-[#8695A4]'>Express, Handlebars</span>
            </div>
        </div>
    </section>
    <section class='flex flex-col gap-10'>
        <img src='assets/images/post-image.png' alt='alt'/>
        <p>{$post['description']}</p>
    </section>
</main>"


?>

</body>
</html>
