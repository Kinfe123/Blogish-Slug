<script>
	import Github from "../../components/ui-s/icosn/github.svelte";


</script>

<div class='content'/>
<div class='main'/>
<div class="mt-20 border-t border-gray-200 bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
    
    
    <div>
      <div class="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 class="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight">
          Proudly open-source
        </h2>
        <p class="mt-5 text-gray-600 sm:text-lg">
          Our source code is available on GitHub - feel free to read, review,
          or contribute to it however you want!
        </p>
      </div>
      <div class="flex items-center justify-center py-10">
        <a
          href="https://github.com/steven-tey/dub"
          target="_blank"
          rel="noreferrer"
        >
        <div class="mx-auto flex max-w-fit space-x-4">
            <!-- <a
                href={`/`}
                class="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
            >
                Start For Free
            </a> -->
            <a
                class="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
                href="https://github.com/Kinfe123"
                target="_blank"
                rel="noreferrer"
            >
                <Github className="h-5 w-5 text-black" />
                <p class="text-sm text-slate-900">Star on GitHub</p>
            </a>
        </div>
          <!-- <div class="flex items-center">
            <div class="flex h-10 items-center space-x-2 rounded-md border border-gray-600 bg-gray-800 p-4">
              <Github class="h-5 w-5 text-white" />
              <p class="font-medium text-white">Star</p>
            </div>
            <div class={styles.label}>
              <CountingNumbers
                value={stars}
                class="font-display font-medium text-white"
              />
            </div>
          </div> -->
        </a>
      </div>
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
		background-image: url('/grid.svg');
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