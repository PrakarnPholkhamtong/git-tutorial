new Vue({
    el:"#vue-app",
    data:{
        like:false,
        product:['computer','smartphone','TV','accessories'],
        message:"",
        name:"Parkarn Pholkhamtong",
        job:"",
        age:21,
        status:false,
        count:0,
        website:'http://www.youtube.com',
        foods:[],
        gender:[],
        Other:"",
        employee:[  {name:'Supakan',age:30,status:false},
            {name:'surapon',age:35,status:true}]
           
        
},
methods:{
    getName:function(){
        return this.name
    },
    setName:function(n){

        return this.name=n
    },
    addAge:function(){
        this.age++;
        console.log(this.age);
    },
    SubtractAge:function(){
        this.age--;
        console.log(this.age)
    },
    addCount:function(){    
        this.count++;
        console.log(this.count)

    },
        getOther:function(){
            return this.Other
        },
        setOther:function(O){
    
            return this.Other=o
        }
    


}
    


})