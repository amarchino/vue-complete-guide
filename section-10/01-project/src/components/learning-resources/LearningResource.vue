<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <nutton>Delete</nutton>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: [ 'title', 'description', 'link' ]
}
</script>

<style>

</style>
