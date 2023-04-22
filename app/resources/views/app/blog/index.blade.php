@extends('layouts.app')


@section('content')
    <main class="w-full flex flex-col max-w-4xl m-auto">
        <div class="flex items-center justify-between mb-20">
            <h1 class="font-bold text-5xl">Блог</h1>
            <button text="Добавить">Добавить</button>
        </div>
        <section>
            {{-- @foreach ($posts as $post) --}}
                <div class='flex flex-col bg-white gap-8 p-6 w-full '>
                    <span class="flex items-center justify-between">
                        <h3 class="font-bold text-2xl cursor-pointer">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </span>
                    <div class="flex gap-7">
                        <span class="date">Дата</span>
                        <span>Категория</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic illum, in voluptatem iste
                        quisquam ipsa quod id tempora repellendus! Omnis fuga magni sequi atque molestiae architecto.
                        Dolore, ipsum ea.
                    </p>
                    <hr>
                </div>
            {{-- @endforeach --}}
        </section>
    </main>
@endsection
