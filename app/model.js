export default{

    async getTaskList(){

        const req = await fetch("https://task.yot.kz/tasks");
        const data = await req.json();
        return data;
    },

    async getTaskPage(page){
        const req = await fetch("https://task.yot.kz/tasks/" + page);
        const data = await req.json();
        return data;
    }
}