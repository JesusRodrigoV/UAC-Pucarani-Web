<template>
    <div class="social-feed">
      <h2>Últimas Publicaciones</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch('https://api.example.com/social-feed');
          const data = await response.json();
          this.posts = data.posts;
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .social-feed {
    padding: 20px;
    background: #f9f9f9;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  h3 {
    margin: 0;
  }
  
  p {
    margin: 5px 0 0;
  }
  </style>
  