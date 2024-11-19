import fetchJson from "../lib/fetch-json";

export async function load(){
    const url = 'https://fdnd-agency.directus.app/items/fabrique_art_objects';
    const response = await fetchJson(url);
    return {
        artObjects: response.data
    };
}