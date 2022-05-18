<template>
    <div class="card">

        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="Nueva" icon="pi pi-plus" class="p-button-success mr-2"  @click="openModal(true)"></Button>
                </div>
            </template>

            <template v-slot:end>
                <!-- <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  /> -->
            </template>
        </Toolbar>

        <Dialog header="Carreras" :visible="displayModal" :modal="true" :style="{width: '50vw'}">

            <input type="hidden" v-model="carrera.id">

            <div class="grid p-fluid">
                <div class="col-12 md:col-12">
                    <InputText placeholder="Ingrese Nombre" v-model="carrera.nombre" />
                </div>
                <div class="col-12 md:col-12">
                    <Textarea cols="30" rows="3" v-model="carrera.detalle" />
                </div>
            </div>

            <template #footer>
                <Button label="Cancelar" @click="closeModal"></Button>
                <Button label="Guardar" @click="guardarCarrera"></Button>
            </template>
        </Dialog>

        <DataTable :value="lista_carreras" responsiveLayout="scroll">
            <template #header>
                <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                    <h5 class="m-0">Carreras</h5>
                </div>
            </template>
            <Column field="id" header="Codigo"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column field="detalle" header="Detalle"></Column>
            <Column field="" header="Materias">
                <template #body="{data}">
                    <router-link :to="{ path: '/carrera/'+data.id }">
                        <Button icon="pi pi-eye" class="p-button-rounded p-button-help"></Button> 
                    </router-link>
                </template>
            </Column>
            <Column field="" header="Opciones">
                <template #body="{data}">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success" @click="editarCarrera(data)"></Button>
                    &nbsp;
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="mostrarCarrera(data)"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as carreraService from './../../../services/carrera.service';

export default{
    setup(){
        const lista_carreras = ref();
        const displayModal = ref(false);
        const carrera = ref({
            id: 0,
            nombre: "",
            detalle: ""
        });

        onMounted(async () => {
            listarCarrera();
        });

        const openModal = (tipo) => {
            displayModal.value = true;
            if(tipo){
                carrera.value.id = 0;
                carrera.value.nombre = "";
                carrera.value.detalle = "";
            }
        }

        const closeModal = () => {
            displayModal.value = false;
        }

        const editarCarrera = (carr) => {
            carrera.value.id = carr.id;
            carrera.value.nombre = carr.nombre;
            carrera.value.detalle = carr.detalle;
            openModal(false);
        }

        const listarCarrera = async () => {
            const {data} = await carreraService.listar();
            lista_carreras.value = data;
        }

        const guardarCarrera = async () => {
            if(carrera.value.id === 0){
                const {data} = await carreraService.guardar(carrera.value);
            }else{
                const {data} = await carreraService.modificar(carrera.value);
            }

            listarCarrera();
            closeModal();
        }

        return {
            lista_carreras,
            displayModal,
            openModal,
            closeModal,
            guardarCarrera,
            carrera,
            editarCarrera
        };
    }
}
</script>

<style></style>