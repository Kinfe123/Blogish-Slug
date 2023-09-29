<script>
	import Discord from '../../components/ui-s/icosn/discord.svelte';
	import Github from '../../components/ui-s/icosn/github.svelte';
	import Telegram from '../../components/ui-s/icosn/telegram.svelte';
    import { ExternalLink } from 'lucide-svelte';
</script>

<div class="content mx-auto flex justify-center items-center">
	<div
		class=" border-t rounded-t-xl border-gray-200 bg-gradient-to-br  from-indigo-300 via-gray-300 to-gray-200 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-100 h-40"
	>
		<div>
			<div class="mx-auto max-w-md text-center sm:max-w-xl under-mod">
				<h2
					class="bg-gradient-to-r animate-pulse  from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight flex justify-center items-center gap-2 underline underline-red-900 underline-offset-2 "
				>
					<Telegram className="h-10 w-9 text-slate-600" /> <a class="flex gap-2" target="_blank" href="https://t.me/Kinfe123">Telegram <ExternalLink class='text-slate-600 font-extrabold text-end  '/></a>
				</h2>
				<!-- <p class="mt-5 text-gray-600 sm:text-lg">Get the community engage with it and be a part of the community that can help you </p> -->
			</div>
		</div>
	</div>
	<div
		class=" border-t rounded-t-xl border-gray-400 bg-gradient-to-br  from-blue-300 via-gray-300 to-gray-200 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-100 h-40"
	>
		<div>
			<div class="mx-auto max-w-md text-center sm:max-w-xl under-mod">
				<h2
					class="bg-gradient-to-r animate-pulse  from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight flex justify-center items-center gap-2 underline underline-red-900 underline-offset-2 "
				>
					<Discord className="h-10 w-9 text-slate-600" />  <a target="_blank" href='https://discord.gg/Kinfish' class="flex gap-2">Discord <ExternalLink class='text-slate-600 font-extrabold text-end  '/></a>
				</h2>
				<!-- <p class="mt-5 text-gray-600 sm:text-lg">Get the community engage with it and be a part of the community that can help you </p> -->
			</div>
		</div>
	</div>
	<div
		class=" border-t rounded-t-xl border-gray-200 bg-gradient-to-br  from-green-200 via-gray-300 to-gray-200  py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-100 h-40"
	>
		<div>
			<div class="mx-auto max-w-md text-center sm:max-w-xl under-mod">
				<h2
					class="bg-gradient-to-r animate-pulse from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight flex justify-center items-center gap-2 underline underline-red-900 underline-offset-2 "
				>
					<Github className="h-6 w-6 text-slate-600 flex justify-start items-end" /> <a class="flex gap-2" href="https://github.com/Kinfe123"> GIthub <ExternalLink class='text-slate-600 font-extrabold text-end  '/>  </a>  
				</h2>
				<!-- <p class="mt-5 text-gray-600 sm:text-lg">Get the community engage with it and be a part of the community that can help you </p> -->
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		display: grid;
        margin:auto;

		grid-template-columns: 0.2fr 0.2fr 0.2fr;
        grid-gap: 30px;
		
	}
    .under-mod {
        text-decoration-color: rgb(117, 115, 115);
        
    }
    
    .under-mod:hover {
        text-decoration: underline;
        transition: 0.6s ease-in-out;
        text-decoration-color: rgb(92, 90, 90);
        cursor: pointer;
    }
</style>
