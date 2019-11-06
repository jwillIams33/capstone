const storage = {
    get: (key) => {
        if(window.localStorage !== undefined){
          let value = window.localStorage.getItem(key)
          return value
        }
    },
    set: (key, value) => {
         if(window.localStorage !== undefined){
                window.localStorage.setItem(key, value)
            }
        }
    }

export default storage