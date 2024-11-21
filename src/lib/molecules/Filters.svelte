<input type="radio" id="All objects" name="categories" value="All">
<input type="radio" id="Pottery" name="categories" value="Pottery">
<input type="radio" id="Islamic art" name="categories" value="Islamic art">
<input type="radio" id="Tapestry" name="categories" value="Tapestry">
<input type="radio" id="Glass" name="categories" value="Glass">

<ul class="filter" >
    <li tabindex="0"><label for="All objects"> All objects </label></li>
    <li tabindex="0"><label for="Pottery"> Pottery </label></li>
    <li tabindex="0"><label for="Islamic art"> Islamic art </label></li>
    <li tabindex="0"><label for="Tapestry"> Tapestry </label></li>
    <li><label for="Glass"> Glass </label></li>
</ul>

<style>
        
    [value="All objects"]:checked ~ .masonry .masonry-item:not([data-category~="All objects"]),
    [value="Pottery"]:checked ~ .masonry .masonry-item:not([data-category~="Pottery"]),
    [value="Islamic art"]:checked ~ .masonry .masonry-item:not([data-category~="Islamic art"]),
    [value="Tapestry"]:checked ~ .masonry .masonry-item:not([data-category~="Tapestry"]),
    [value="Glass"]:checked ~ .masonry .masonry-item:not([data-category~="Glass"]) 
    {
        background-color: rgb(0, 0, 0, 0.7);
    }

    input[type="radio"] {
        position: absolute;
        left: -9999px;
    }

    .filter label, .filter li  {
        cursor: pointer;
    }

    @media (prefers-reduced-motion) {
        .filter li {
            background-color: #464646;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 18px;
            margin: 0.5em;
            padding: 0.5em;
            width: 80px;
            text-align: center;
            list-style-type: "";
            transition: 1s;
        }

        .filter li:focus, .filter li:hover {
            box-shadow: 2px 2px 2px #989802;
            background-color: #ffff00;
            color: #000;
        }
    }

    .filter li {
        background-color: #464646;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        margin: 0.5em;
        padding: 0.5em;
        width: 80px;
        text-align: center;
        list-style-type: "";
        transition: 0.5s;
    }

    .filter li:focus, .filter li:hover {
        box-shadow: inset 6.5em 0 0 0 #ffff00;
        color: #000;
    }

    .filter {
        bottom: 5em;
        display: flex;
        margin: 0;
        overflow: scroll;
        padding: 0;
        position: fixed;
        width: 25em;
        z-index: 268;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 600px) {
        .filter {
            width: max-content;
        }
    }

</style>