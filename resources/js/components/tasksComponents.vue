
<template>
    <div class="container">
        <ul class="list-group-item">
            <li class="list-group-item" v-for="task in tasks" :key="task.id">
                <a href="#"> {{ task.task}}</a>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {

        data() {
            return {
                tasks: {}
            }
        },
        created() {
            axios.get('http://192.168.56.102:8000/tasklist')
                .then(response => this.tasks = response.data)
                .catch(error => console.log(error));
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
