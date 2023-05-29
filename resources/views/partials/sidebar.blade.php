<section class="bg-white p-4 rounded-2xl w-full max-w-[350px]">
    <h3 class="text-2xl font-medium mb-6">Популярные новости</h3>
    <div class="flex flex-col justify-center gap-5">
        @foreach($news as $one)
            <div class="flex flex-col justify-center gap-3">
                <p class="text-lg">{{$one->title}}</p>
                <span class="text-lg text-[#2F222266]">Date</span>
            </div>
            <hr/>
        @endforeach
    </div>
</section>
