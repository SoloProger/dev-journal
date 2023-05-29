<article class="p-10 gap-7 w-full max-w-[1140px] rounded-2xl bg-white flex flex-col">
    <div class="flex justify-between items-center">
        <div class="flex gap-3">
            @foreach($post->categories as $category)
                <span class="p-3  text-[#5D71DD] rounded bg-[#F7F8FD]">{{$category->name}}</span>
            @endforeach
        </div>
        <span>Date</span>
    </div>
    <div class="flex flex-col gap-5">
        <h3 class="text-2xl text-[#2F2222] font-bold">{{$post->title}}</h3>
        <p class="text-[#2F222266] text-lg">{{$post->getPreview()}}</p>
    </div>
</article>
