loadVue = async (url) => {
    let { loadModule } = window['vue3-sfc-loader'];
  
    const options = {
      moduleCache: {
        vue: window.Vue
      },
  
      async getFile(url) {
        return await fileHandle.getFile(url);
      },
  
      async addStyle(styleStr) {
        const style = document.createElement('style');
        style.textContent = css;
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
      },
  
      log(type, ...args) {
        console.log(type, ...args);
      }
    };
    return await loadModule(url, options);
  };