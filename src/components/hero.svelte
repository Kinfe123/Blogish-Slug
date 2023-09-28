<script>
	let appmode = import.meta.env.VITE_APP_MODE;
	let APP_DOMAIN = appmode == 'dev' ? 'http://localhost:5173/' : 'https://blogish.vercel.app/';
	import Github from './ui-s/icosn/github.svelte';

	//    let APP_DOMAIN = "http:"
	// console.log(VITE_APP_MODE)
</script>

<div class="content" />
<div class="main" />
<div class="z-20 mx-auto mb-10 mt-12 max-w-lg px-2.5 text-center sm:max-w-xl sm:px-0">
	<!-- <div class='content'>
  </div> -->
	<!-- <div class="main"> -->
	<!-- </div> -->
	<a
		href={`/`}
		class="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
	>
		<p class="text-sm font-semibold text-gray-700">
			{'{'} siteConfig.update {'}'}
		</p>
		<div>
			<p>🔥</p>
		</div>
		<!-- <ExpandingArrow class="-ml-1 h-3.5 w-3.5" />
     
     -->
	</a>

	<h1
		data-testid="hero-text"
		class="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]"
	>
		BLog [Slug] With
		<br />
		<span
			class="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 bg-clip-text text-transparent"
		>
			KiNFiSH
		</span>
	</h1>
	<h2 class="mt-5 text-gray-600 sm:text-xl sm:m-auto sm:max-w-lg sm:mt-10">
		Blogish is a place where <span
			class="font-bold text-inherit underline underline-offset-1 hover:underline-offset-2 hover:animate-pulse animate-5s"
			>KiNFiSH</span
		> shares some thoughts as well memes related to tech and programming stuff
	</h2>

	<div class="mx-auto mt-10 flex max-w-fit space-x-4">
		<a
			href={`${APP_DOMAIN}/register`}
			class="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
		>
			Start For Free
		</a>
		<a
			class="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
			href="https://dub.sh/github"
			target="_blank"
			rel="noreferrer"
		>
			<Github className="h-5 w-5 text-black" />
			<p class="text-sm">Star on GitHub</p>
		</a>
	</div>
</div>

<style>
	.main {
		width: 100vw;
		min-height: 100vh;
		position: fixed;
		z-index: -1;
		display: flex;
		justify-content: center;
		padding: 120px 24px 160px 24px;
		pointer-events: none;
	}

	.main:before {
		background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%);
		position: absolute;
		content: '';
		z-index: 2;
		width: 100%;
		height: 100%;
		top: 0;
	}

	.main:after {
		content: '';
		background-image: url('/static/grid.svg');
		z-index: 1;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		opacity: 0.4;
		filter: invert(1);
	}
	.content {
		z-index: 0;
		width: 100%;
		max-width: 640px;
		background-image: radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
			radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
			radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
			radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
			radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
			radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
			radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		filter: blur(100px) saturate(150%);
		top: 80px;
		opacity: 0.2;
	}
</style>
