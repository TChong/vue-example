<template>
  <section class="container">
    <h1>Home Page</h1>

    <div>
      <article class="media" v-for="comment in comments">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{comment.name}}</strong> <small>{{comment.username}}</small> <small>{{comment.timeago}}</small>
              <br>
              {{comment.comment}}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete" @click="deleteComment(comment.id)"></button>
        </div>
      </article>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a comment..." v-model="newComment"></textarea>
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              
            </div>
            <div class="level-right">
              <div class="level-item">
                <a class="button is-info" @click="addComment">Submit</a>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
module.exports = {
  data() {
    return {
      newComment: 'Test',
      comments: [
        {
          id: Date.now(),
          name: 'John Smith',
          username: '@johnsmithh',
          timeago: '31m',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis vel quas! Culpa aperiam ut impedit iusto, labore perferendis officiis soluta vero tempora quidem perspiciatis, tempore sit itaque qui excepturi.'
        }
      ]
    }
  },
  methods: {
    addComment() {
      if (!this.newComment) return;

      this.comments.push({        
        id: Date.now(),
        name: 'John Smith',
        username: '@johnsmithh',
        timeago: 'now',
        comment: this.newComment
      });

      this.newComment = ''
    },
    deleteComment(commentId) {
      this.comments = this.comments.filter(comment => comment.id != commentId)
    }
  }
}
</script>