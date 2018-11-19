export const Singleton = (() => {
  let instance;

  class Car {}

  return {
    getInstance() {
      if (!instance) instance = new Car();
      return instance;
    }
  };
})();
