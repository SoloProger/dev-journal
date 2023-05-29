<section class="bg-[#5D71DD0D] flex flex-col gap-8 p-10 rounded-2xl w-full max-w-[350px]">
    <h3 class="text-2xl text-center font-medium">Подписка на рассылку</h3>
    <form action="" class="flex justify-center flex-col gap-4">
        @csrf
        <input type="text" name="email" class="rounded-3xl p-4 text-xl text-[#2F222266]" placeholder="example@gmail.com">
        <button type="submit" class="rounded-3xl bg-[#5D71DD] p-4 text-white text-xl">Подписаться</button>
    </form>
</section>
