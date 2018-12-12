<template>
  <Transition name="Modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot
              name="body">
              default body
            </slot>
          </div>
          <div class="modal-footer">
            <button
              class="modal-default-button"
              @click="$emit('close')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="icon"
                data-icon="times"
                data-prefix="fas"
                role="img"
                viewBox="0 0 352 512">
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>

export default {
  name: 'Modal'
}
</script>
<style lang="scss">
  @import '../../styles/modal.scss';
</style>

