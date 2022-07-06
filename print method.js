//contact print method
function contact(name,number){
    this.name=name
    this.number=number
    this.print=function(){
        console.log(this.name+": "+this.number)
    }
       
}
var a= new contact("David",12345)
var b= new contact("John",54321)
a.print()
b.print()