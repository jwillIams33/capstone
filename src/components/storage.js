const storage = {
    get: (key) => {
        if(typeof window !== "undefined"){
          let value = window.localStorage.getItem(key)
          return value
        }
    },
    set: (key, value) => {
         if(typeof window !== "undefined"){
                window.localStorage.setItem(key, value)
            }
        }
    }

export default storage