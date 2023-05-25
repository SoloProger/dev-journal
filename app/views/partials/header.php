<?php session_start(); ?>
<header class="mb-16">
    <nav class="flex px-16 py-7 justify-between items-center ">
        <span class="border-2 cursor-default border-black rounded p-2 text-2xl">Дневник разработчика</span>
        <ul class="flex gap-12">
            <li class="item ">
                <a href="index.php" class="item-link">Главная</a>
            </li>
            <li class="item">
                <a href="blog.php" class="item-link">Блог</a>
            </li>
            <?php

            if (isset($_SESSION['user'])) {
                echo "
                    
                    <li class='item'>
                        <a href='src/auth/logout.php' class='item-link'>Выйти</a>
                    </li>";
            } else {
                echo "
                    <li class='item'>
                        <a href='login.php' class='item-link'>Войти</a>
                    </li>";
            }


            ?>
        </ul>
    </nav>
</header>