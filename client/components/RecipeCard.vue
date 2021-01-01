<template>
<div class="card recipe-card">
  <img :src="recipe.picture" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{ recipe.name }}</h5>
    <p class="card-text">
      <strong>Ingredients:</strong>{{ recipe.ingredients }}
    </p>
    <div class="card-footer">
      <div class="row">
        <nuxt-link :to="`/recipes/${recipe.id}/`" class="btn btn-sm btn-success">مشاهده</nuxt-link>
              &nbsp;&nbsp;
      <nuxt-link :to="`/recipes/${recipe.id}/edit/`" class="btn btn-sm btn-primary">ویرایش</nuxt-link>
      &nbsp;&nbsp;
      <button @click="onDelete(recipe.id)" class="btn btn-sm btn-danger">حذف</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:["recipe" , "onDelete"]
}
</script>

<style>
.recipe-card {
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,.6);


}
</style>
