class person{
    name="";
    email="";
    age=0;
    resume="";

    printInfo(){
        console.log(this.name,this.email, this.age, this.resume);
    }
}
let jonh = new person();
jonh.name="John Doe";
jonh.age=40;
jonh.email="jdoe@gmail.com";
jonh.printInfo();