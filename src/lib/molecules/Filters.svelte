<script>
  import { activeFilter } from "$lib/store";

  function setFilter(filter) {
    activeFilter.set(filter);
  }
</script>

<ul>
  <li>
    <button
      on:mouseover={() => activeFilter.set("*")}
      on:mouseleave={() => ($activeFilter = "*")}>All objects</button
    >
  </li>
  <li>
    <button
      on:mouseover={() => activeFilter.set("Pottery")}
      on:mouseleave={() => ($activeFilter = "*")}>Pottery</button
    >
  </li>
  <li>
    <button
      on:mouseover={() => activeFilter.set("Islamic art")}
      on:mouseleave={() => ($activeFilter = "*")}>Islamic art</button
    >
  </li>
  <li>
    <button
      on:mouseover={() => activeFilter.set("Tapestry")}
      on:mouseleave={() => ($activeFilter = "*")}>Tapestry</button
    >
  </li>
  <li>
    <button
      on:mouseover={() => activeFilter.set("Glass")}
      on:mouseleave={() => ($activeFilter = "*")}>Glass</button
    >
  </li>
</ul>

<style>
  ul {
    bottom: 5em;
    display: flex;
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

  ul li {
    cursor: pointer;
  }

  @media (prefers-reduced-motion) {
    ul li button:focus,
    ul li button:hover {
      box-shadow: 2px 2px 2px #989802;
      background-color: #ffff00;
      color: #000;
    }
  }

  ul li {
    list-style-type: "";
  }

  ul button {
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
    ul button:focus,
    ul button:hover {
      box-shadow: inset 6.5em 0 0 0 #ffff00;
    }
  }

  ul button:hover,
  ul button:focus {
    color: #000;
  }

  @media (min-width: 600px) {
    ul {
      width: max-content;
    }
  }
</style>
