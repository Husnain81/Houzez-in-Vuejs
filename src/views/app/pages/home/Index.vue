<template>
  <div id="hero-section">
    <HeroSection/>
    <SearchBar/>
  </div>
  <FeaturedProperties/>
  <TeamSection/>
  <NewsAndBlogs/>
  <NewsletterSection/>
</template>

<script setup>
import HeroSection from "@/views/app/pages/home/HeroSection.vue";
import FeaturedProperties from "@/views/app/pages/home/FeaturedProperties.vue";
import TeamSection from "@/views/app/pages/home/TeamSection.vue";
import NewsAndBlogs from "@/views/app/pages/home/NewsAndBlogs.vue";
import NewsletterSection from "@/views/app/pages/home/NewsletterSection.vue";
import SearchBar from "@/views/app/pages/home/SearchBar.vue";
</script>