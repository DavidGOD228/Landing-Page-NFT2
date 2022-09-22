class TitleAnimation {
  #_initial={
    top: 15,
    opacity: 0,
  }

  #_whileInView = {
    top: 0,
    opacity: 1,
  }

  #_transition = idx => ({
    delay: 0.01 * idx,
    duration: 0.5,
    ease: 'easeOut'
  })

  #_viewport = {
    once: true
  }

  get initial() { return this.#_initial };
  get whileInView() { return this.#_whileInView };
  get viewport() { return this.#_viewport };

  transition(idx) { return this.#_transition(idx) };
}

export default new TitleAnimation();