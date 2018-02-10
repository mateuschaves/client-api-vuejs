export default {
    computed: {
        filteredStudents: function(){
            return this.students.filter((student) => {
                return student.nome.match(this.search);
            });
        }
    }
};
