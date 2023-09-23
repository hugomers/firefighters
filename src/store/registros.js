import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useClientStores = defineStore('clients', ()=>{
    const regist = ref([])

    const add = (poke)=>{
        regist.value.push(poke)
    }
    const remove = (id) => {
        regist.value = regist.value.filter((item) => item !== id)
    }

    const findRegis = name => regist.value.find((item) => item === name)

    return {
        regist,
        add,
        remove,
        findRegis,
    }
})