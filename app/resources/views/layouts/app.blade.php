<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    @vite('resources/sass/app.scss')
</head>

<body>
    <header class="mb-16">
        <nav class="flex px-16 py-7 justify-end ">
            <ul class="flex gap-12">
                <li class="item">
                    <a href="{{ route('main') }}" class="item-link">Главная</a>
                </li>
                <li class="item">
                    <a href="{{ route('blog') }}" class="item-link">Блог</a>
                </li>
            </ul>
        </nav>
    </header>

    @yield('content')
</body>

</html>
