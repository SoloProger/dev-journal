@extends('layouts.main')

@section('title', 'Главная страница')

@section('hero')
    @include('partials.hero')
@endsection

@section('content')
    <main class="flex px-28 mb-20">
        <section class="flex flex-col gap-10 w-full">
            @foreach($posts as $post)
                @include('posts.item', ['post' => $post])
            @endforeach
            <div class="w-full max-w-6xl mb-10">
                {{$posts->links()}}
            </div>
        </section>
        <section class="flex flex-col items-center gap-10">
            @include('partials.sidebar', ['news' => $news])
            @include('partials.subscribe')
        </section>
    </main>
@endsection
