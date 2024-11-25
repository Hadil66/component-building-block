<input type="radio" id="All objects" name="categories" value="All">
<input type="radio" id="Pottery" name="categories" value="Pottery">
<input type="radio" id="Islamic art" name="categories" value="Islamic art">
<input type="radio" id="Tapestry" name="categories" value="Tapestry">
<input type="radio" id="Glass" name="categories" value="Glass">

<ul class="filter" >    

    <li><button data-filter="*">All objects</button></li>
    <li><button data-filter="Pottery">Pottery</button></li>
    <li><button data-filter="Islamic art">Islamic art</button></li>
    <li><button data-filter="Tapestry">Tapestry</button></li>
    <li><button data-filter="Glass">Glass</button></li>
</ul>

<style>
        
    [value="All objects"]:checked .masonry .masonry-item:not([data-category~="All objects"]),
    [value="Pottery"]:checked .masonry .masonry-item:not([data-category~="Pottery"]),
    [value="Islamic art"]:checked .masonry .masonry-item:not([data-category~="Islamic art"]),
    [value="Tapestry"]:checked .masonry .masonry-item:not([data-category~="Tapestry"]),
    [value="Glass"]:checked .masonry .masonry-item:not([data-category~="Glass"]) 
    {
        background-color: rgb(0, 0, 0, 0.7);
    }
    
    input[type="radio"] {
        position: absolute;
        left: -999px;
    }

    .filter {
    bottom: 5em;
    display: flex;
    justify-content: center;
    margin: 0;
    overflow: scroll;
    padding: 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 25em;
    z-index: 268;
}

    ::-webkit-scrollbar {
        display: none;
    }

    .filter label, .filter li  {
        cursor: pointer;
    }

    @media (prefers-reduced-motion) {
        .filter li button:focus, .filter li button:hover {
            box-shadow: 2px 2px 2px #989802;
            background-color: #ffff00;
            color: #000;
        }
    }

    .filter li {
        list-style-type: "";
    }

    .filter button {
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
        width: max-content;
    }

    @media (prefers-reduced-motion: no-preference) {
        .filter button:focus, .filter button:hover {
            box-shadow: inset 6.5em 0 0 0 #ffff00;
        }
    }

    .filter button:hover, .filter button:focus {
        color: #000;
    }



    @media (min-width: 600px) {
        .filter {
            width: max-content;
        }
    }

</style>