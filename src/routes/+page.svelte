<script>
    export let data;
    	console.log(data); 
    import Filters from '$lib/molecules/Filters.svelte'; 
</script>

<Filters />

{#each data.artObjects as art}
    <ul class="masonry">
        <li class="masonry-item" data-category= "{art.techniques}">
            <h2>{art.title}</h2>
            <img src={"https://fdnd-agency.directus.app/assets/" + art.image} alt={art.title} width="200px" />
        </li>
    </ul>
{/each}

 <style>
    .masonry {
		column-count: 1;
		column-gap: 1rem;
		list-style: none;
		padding: 0;
	}

	.masonry-item {
		break-inside: avoid;
		margin-bottom: 1rem;
		position: relative;
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	figure {
		margin: 0;
		position: relative;
	}

	img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 8px;
		transition: transform 0.3s ease-in-out;
	}

	/* overlay */

	figcaption {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h2 {
		font-size: 26px;
	}

	@media (min-width: 600px) {
		.masonry-item {
            width: 500px;
        }
	}
 </style>