
<template>
    <div class="container">
        <ul class="list-group-item">
            <li class="list-group-item" v-for="task in tasks.data" :key="task.id">
                <a href="#"> {{ task.task}}</a>
            </li>
        </ul>
        <pagination :data="tasks" @pagination-change-page="getResults"></pagination>
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
        methods: {
		// Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
                axios.get('http://192.168.56.102:8000/tasklist?page=' + page)
                    .then(response => {
                        this.tasks = response.data;
                    });
                }
	    },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
