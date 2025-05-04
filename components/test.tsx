export default (() => {
    function YourComponent() {
      return <p class="red-text">Example Component</p>
    }
   
    YourComponent.css = `
    p {
      color: red;
    }
    `
   
    return YourComponent
  }) satisfies QuartzComponentConstructor