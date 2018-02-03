<template>
  <div class="container">
    <Logo :description="logoDescription" />
    <div class="wrapper" v-show="!isThinking">
      <div class="wrapper-text">
        <div class="container-text">
          <div class="text-box">
            <textarea v-model="content" />
          </div>
        </div>
      </div>
      <div class="post-button">
        <div class="container-button" @click="postContent">
          <div class="wrapper-button">
            <div class="button-content">
              <span class="button-label">{{buttonTitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Thinking v-show="isThinking"/>
  </div>
</template>


<script>
import axios from 'axios';
import Logo from './Logo.vue';
import Thinking from './Thinking.vue';

export default {
  name: 'Home',
  data() {
    return {
      buttonTitle: 'Enviar Texto',
      logoDescription: 'Desafio NLU',
      isThinking: false,
      content: '',
    };
  },
  methods: {

    handleSucess(response) {
      const { data, status } = response;
      data.status = status;
      this.isThinking = false;
      this.$router.push({ name: 'Relation', params: { data } });
    },

    handleFail(error) {
      const { status } = error.response;
      const data = { status };
      this.isThinking = false;
      this.$router.push({ name: 'Relation', params: { data } });
    },

    postContent() {
      const { content } = this;
      if (content !== '') {
        this.isThinking = true;
        axios.post('/api/v1/nlu', { content })
          .then(this.handleSucess)
          .catch(this.handleFail);
      }
    },
  },
  components: {
    Logo,
    Thinking,
  },
};
</script>

<style scoped>
  @import url(../colors.css);

  .container {
    display: flex;
    height: 80vh;
    align-items: center;
  }

  .wrapper-text {
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
  }

  .container-text {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-box {
    width: 100%;
    height: 90%;
    font-size: 1.5em;
  }

  .text-box textarea {
    width: 90%;
    height: 90%;
    background: transparent;
    border: 1px solid var(--light-green);
    color: var(--light-green);
    border-radius: 6px;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .post-button {
    width: 90%;
    height: 20%;
  }

  .container-button {
    height: 100%;
  }

  .wrapper-button {
    height: 100%;
  }

  .button-content {
    height: 100%;
    border: var(--light-green) solid 1px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .button-label {
    font-size: 1.5em;;
    color: var(--light-green);
  }

  @media screen and (orientation: portrait) {
    .container {
      display: block;
      height: 80vh;
    }

    .wrapper {
      width: 100%
    }

    .wrapper-text {
      width: 100%;
      height: 40%;
      margin-top: 10%;
    }

    .container-text {
      height: 100%;
      min-height: 100%
    }

    .text-box {
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 2em;
    }

    .post-button {
      width: 100%;
      height: 9%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container-button {
      height: 100%;
      width: 90%;
    }

    .wrapper-button {
      display: flex;
      justify-content: center;
      height: 100%;
    }

    .button-content {
      align-items: center;
      width: 100%;
    }

    .button-label {
      font-size: 3em;
    }
  }
</style>
