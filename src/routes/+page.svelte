<script>
    export let data;
    	console.log(data); 
    import Filters from '$lib/Filters.svelte'; 
</script>

{#each data.artObjects as art}
    <ul>
        <li>
            <h2>{art.title}</h2>
            <img src={"https://fdnd-agency.directus.app/assets/" + art.image} alt={art.title} width="400px" />
        </li>
    </ul>
{/each}

<Filters />
