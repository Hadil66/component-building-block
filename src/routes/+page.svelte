<script>
    export let data;
    	console.log(data); 
    import Filters from '$lib/Filters.svelte'; 
</script>

<Filters />

{#each data.artObjects as art}
    <ul class="masonry">
        <li class="masonry-item" data-category= "{art.techniques}">
            <h2>{art.title}</h2>
            <img src={"https://fdnd-agency.directus.app/assets/" + art.image} alt={art.title} width="400px" />
        </li>
    </ul>
{/each}

