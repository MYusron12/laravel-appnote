<template>
  <div class="listNotes">
     <ul>
          <li v-for="(row,index) in propNotes" :key="index">
               <button class="btn-note" @click="idNote(row.id)">
                    <label>{{ cutString(row.title, 25) }}</label>
                    <span>{{ cutString(row.description, 100) }}</span>
               </button>
          </li>
     </ul>
  </div>
</template>

<script>
export default {
     name: 'listNotes',
     props: {
          propNotes : {
               type: Array,
               required: true,
          },
          propEditNote : {
               type: Function,
               required: false,
          }
     },
     data: function () {
          return {

          }
     },
     methods: {
          idNote(id){
               this.propEditNote(id);
          },
          cutString(string, limit){
               return string.substring(0, limit) + "...";
          }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
     list-style-type: none;
     padding: 0;
     margin:0px;
}

.btn-note {
     text-align: left;
     border: none;
     border-bottom: 1px solid gainsboro;
     padding: 0px 15px;
     cursor: pointer;
     outline: none;
     background: #f7f7f7;
     height: 150px;
     width: 100%;
}
.btn-note:hover {
     background:#eaeaea;
}
.btn-note label{
     display:block;
     color: #444444;
     font-size: 1.5em;
     margin-bottom: 15px;
}
.btn-note span{
    color: #545454;
}
</style>
