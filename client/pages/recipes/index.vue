<template>

  <main class="container mt-5">

<!-- Other stuff -->

    <div class="row">
      <div class="col-12 text-right mb-4">
        <div class="d-flex justify-content-between">
          <h3>دستور پخت ها</h3>
          <nuxt-link to="/recipes/add" class="btn btn-info">اضافه کردن غذا</nuxt-link>
        </div>
      </div>
      <template v-for="recipe in recipes">
        <div :key="recipe.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <recipe-card :onDelete="deleteRecipe" :recipe="recipe"></recipe-card>
        </div>
      </template>
    </div>
  </main>
</template>
<script>
import RecipeCard from "~/components/RecipeCard.vue";

export default {

  head() {
    return {
      title: "Recipes list"
    };
  },

  components: {
    RecipeCard
  },
  middleware:'auth',
  async asyncData({ $axios, params }) {
    try {
      let recipes = await $axios.$get(`/recipes/`);
      return { recipes };
    } catch (e) {
      return { recipes: [] };
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    async deleteRecipe(recipe_id) {
      try {
        await this.$axios.$delete(`/recipes/${recipe_id}/`); // delete recipe
        let newRecipes = await this.$axios.$get("/recipes/"); // get new list of recipes
        this.recipes = newRecipes; // update list of recipes
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style scoped>
</style>
