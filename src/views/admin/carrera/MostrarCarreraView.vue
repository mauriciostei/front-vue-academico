<template>
<div>
    <div class="card">
        <h1>{{ carrera.nombre }} </h1>
        <p> {{ carrera.detalle }} </p>
    </div>
    <div class="card">
        <DataTable :value="carrera.materias" responsiveLayout="scroll">
            <template #header>
                <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                    <h5 class="m-0">Lista de Materias</h5>
                </div>
            </template>
            <Column field="id" header="Código"></Column>
            <Column field="nombre" header="Nombre Materia"></Column>
            <Column field="sigla" header="Sigla"></Column>
        </DataTable>
    </div>
</div>
</template>

<script>
import * as carreraServ from '@/services/carrera.service'

export default {
    data(){
        return {
            id: 0,
            carrera: ''
        }
    },
    async mounted(){
        this.id = this.$route.params.id;
        const {data}  = await carreraServ.mostrar(this.id);
        this.carrera = data;
    }
}
</script>

<style></style>