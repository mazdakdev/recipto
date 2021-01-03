<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h2 class="mb-3 display-4 text-uppercase">{{ recipe.name }}</h2>
      </div>
      <div class="col-md-6 mb-4">
        <img
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="recipe.picture"
          alt
        >
      </div>
      <div class="col-md-6">
        <div class="recipe-details">
          <h4>مواد لازم 🍔</h4>
          <p>{{ recipe.ingredients }}</p>
          <h4>زمان اماده شدن ⏱</h4>
          <p>{{ recipe.prep_time }} mins</p>
          <h4>سختی ⚙️</h4>
          <p>{{ recipe.difficulty }}</p>
          <h4>نحوه درست کردن 📚 </h4>
          <textarea class="form-control" rows="10" v-html="recipe.prep_guide" disabled />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: "View Recipe"
    };
  },
   middleware: 'auth',
  async asyncData({ $axios, params }) {
    try {
      let recipe = await $axios.$get(`/recipes/${params.id}`);
      return { recipe };
    } catch (e) {
      return { recipe: [] };
    }
  },
  data() {
    return {
      recipe: {
        name: "",
        picture: "",
        ingredients: "",
        difficulty: "",
        prep_time: null,
        prep_guide: ""
      }
    };
  }
};
</script>
<style scoped>
</style>
