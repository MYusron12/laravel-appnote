<template>
     <div class="formNote">
          <form @submit="submitNote">
               <div class="menu">
                    <button type="button" @click="submitRemove" class="bg-danger btn btn-delete" v-if="canDelete">Delete  <img class="loader" src="../assets/loader.gif" v-if="isSubmitRemove">
                    </button>

                    <button type="submit" class="bg-success btn" :disabled="!isValid">Save <img class="loader" src="../assets/loader.gif" v-if="isSubmitSave"></button>
               </div>
               <div class="content">
                    <input type="hidden" class="text" readonly="true" v-model="id" />
                    <input type="text" class="text" placeholder="Title" v-model="title" />
                    <textarea class="text textarea" placeholder="Tuliskan rencana kamu..." v-model="description"></textarea>
               </div>
          </form>
     </div>
</template>

<script>
     export default {
          name: 'FormNote',
          props: {
               propSaveNote : {
                    type: Function,
                    required: true,
               },
               propUpdateNote : {
                    type: Function,
                    required: true,
               },
               propRemoveNote : {
                    type: Function,
                    required: true,
               },
               propDataForm : {
                    type: Object
               }
          },
          data: function(){
               return {
                    id: 0,
                    title: '',
                    description: '',
                    canDelete: false,
                    isSubmitSave: false,
                    isSubmitRemove: false
               }
          },
          methods: {
               submitNote(e) {
                    e.preventDefault();
                    this.isSubmitSave = true; //loader

                    //nanti proses simpan data disini

                    this.isSubmitSave = false; //loader
                    if(this.id === 0){
                         this.propSaveNote(this.title, this.description);
                    }else{
                         this.propUpdateNote(this.id, this.title, this.description);
                    }
               },
               submitRemove(){
                    this.isSubmitRemove = true; //loader
                    this.propRemoveNote(this.id);
                    this.resetInput();
                    this.canDelete = false;
                    this.isSubmitRemove = false; //loader
               },
               resetInput(){
                    this.id = 0;
                    this.title = '';
                    this.description = '';
               }
          },
          watch:{
               propDataForm: function(note){
                    if(note.id > 0){
                         //form untuk edit data
                         this.id = note.id;
                         this.title = note.title;
                         this.description = note.description;
                         this.canDelete = true;
                    }
                    else{
                         //form bikin note baru
                         this.resetInput();
                         this.canDelete = false;
                    }
               }
          },
          computed: {
               isValid() {
                    let isValid = true;

                    if(this.title.trim().length === 0){
                         isValid = false;
                    }

                    return isValid;
               }
          }
     }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
     background: #f7f7f7;
     padding:10px 25px;
     margin-bottom: 25px;
     text-align:right;
     border-bottom: 1px solid #e8e6e6;
}
.btn-delete{ margin-right:10px; }
.content{
     padding: 0px 25px;
}
.text{
     display: block;
     width: 100%;
     padding: 0px;
     font-size: 20px;
     font-weight: bold;
     color: #2c3e50;
     border: none;
     margin-bottom: 10px;
     box-sizing: border-box;
     outline: none;
}
.textarea{
     min-height: 350px;
     font-size: 15px;
     font-weight: lighter;
     line-height: 30px;
}
.loader{
     vertical-align: middle;
}
</style>
