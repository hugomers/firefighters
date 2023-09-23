<script setup>
import { ref } from 'vue';
import LoadingSpin from "../components/LoadingSpinner.vue"
import { useClientStores } from '../store/registros'

const regisAdd = useClientStores()
const {add, findRegis , favoritos , remove} = regisAdd

const loading = ref(true)
let moncli = ref();
let query = 'query { items_by_column_values (board_id: 5195369901, column_id: \"estado\", column_value: \"DATE REY!!!\") { id name column_values{ id title text}} }';

fetch("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'TOKEN'
    },
    body: JSON.stringify({
        'query': query
    })
})
    .then(res => res.json())

    //    .then(res => console.log(JSON.stringify(res, null, 2)));
    .then(res => {
        moncli.value = res.data.items_by_column_values, null, 2
        console.log(moncli)
    })
    .finally(() => loading.value = false)
</script>
<template>
    <LoadingSpin v-if="loading" />
    {{ favoritos }}
    <div>
        
        <h1>Alta de Clientes en Sucursales</h1>
        <table class="table table-dark table-hover table-bordered text-center">
            <tr>
                <td class="me-3" >Sucursal</td>
                <td class="me-3" >Cliente</td>
                <td class="me-3" >P.ortorgado</td>
                <td class="me-3" >Accion</td>
            </tr>


            <tr v-for="client in moncli" :key="client.id">
                <td class="me-3" >{{ client.column_values[3].text }}</td> <!--sucursal-->
                <td class="me-3" >{{ client.column_values[4].text }}</td><!--nombre-->
                <td class="me-3" >{{ client.column_values[15].text }}</td><!--precio-->
                <td class="me-3" >
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input   :disabled="client.id" type="radio" class="btn-check" :name= "`btnradio${client.id}`" :id="`btncheck1${client.id}`" autocomplete="off" check @click="add(client.id)" >
                        <label  class="btn btn-outline-success btn-sm" :for="`btncheck1${client.id}`"  >Registrar FS</label>
                    </div>

                </td>

            </tr>
        </table>

    </div>
</template>