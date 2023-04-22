@extends('layouts.app')

@section('content')
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
            <img src="{{ asset('img/book.jpg') }}" alt="" class="rounded-full w-[245px] h-[240px]" />
        </section>
    </main>
@endsection
