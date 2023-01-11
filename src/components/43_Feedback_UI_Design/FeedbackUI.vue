<template>
  <div id="feedback-panel" class="panel-container">
    <div v-if="showFeedbackOptions" class="step-one">
      <strong
        >How satisfied are you with our <br />
        customer support performance?</strong
      >
      <div class="ratings-container">
        <div
          class="rating"
          @click="setActive(0)"
          :class="{ active: isActive.first }"
        >
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
            alt=""
          />
          <small>Unhappy</small>
        </div>

        <div
          class="rating"
          @click="setActive(1)"
          :class="{ active: isActive.second }"
        >
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
            alt=""
          />
          <small>Neutral</small>
        </div>

        <div
          class="rating"
          @click="setActive(2)"
          :class="{ active: isActive.third }"
        >
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
            alt=""
          />
          <small>Satisfied</small>
        </div>
      </div>
      <button class="btn" id="send" @click="send">Send Review</button>
    </div>
    <div v-else class="step-two">
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <strong>Feedback: {{ feedbackText }}</strong>
      <p>We'll use your feedback to improve our customer support</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    const isActive = reactive({
      first: false,
      second: false,
      third: true,
    });

    const showFeedbackOptions = ref(true);

    const activeNum = ref(2);

    const feedbackTextOptions = ["unhappy", "neutral", "statisfied"];

    const feedbackText = ref(feedbackTextOptions[2]);

    //TODO: refactor this function
    function setActive(num) {
      if (num === 0) {
        activeNum.value = num;
        isActive.first = true;
        isActive.second = false;
        isActive.third = false;
        return;
      }

      if (num === 1) {
        activeNum.value = num;
        isActive.first = false;
        isActive.second = true;
        isActive.third = false;

        return;
      }

      if (num === 2) {
        activeNum.value = num;
        isActive.first = false;
        isActive.second = false;
        isActive.third = true;

        return;
      }
    }

    function send() {
      showFeedbackOptions.value = false;
      feedbackText.value = feedbackTextOptions[activeNum.value];
      return;
    }

    return { isActive, showFeedbackOptions, feedbackText, setActive, send };
  },
};
</script>

<style lang="postcss">
.panel-container {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-size: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  max-width: 400px;

  & > .step-one {
    & > .strong {
      line-height: 20px;
    }

    & > .ratings-container {
      display: flex;
      margin: 20px 0;

      & > .rating {
        flex: 1;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        padding: 20px;
        margin: 10px 5px;

        &:hover,
        &.active {
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

          & > small {
            color: #111;
          }
        }

        & > img {
          width: 40px;
        }

        & > small {
          color: #555;
          display: inline-block;
          margin: 10px 0 0;
        }
      }
    }
    & > .btn {
      background-color: #302d2b;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 30px;
      cursor: pointer;

      &:focus {
        outline: 0;
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }

  & > .step-two {
    display: flex;
    flex-direction: column;
    & > .fa-heart {
      display: block;
      color: red;
      font-size: 30px;
      margin-bottom: 10px;
    }
    & > strong {
      margin: 5px 0;
    }
  }
}
</style>
