function greet(name,callback){
    console.log("Hello," + name);
    callback()
}
function sayGoodbye(){
    console.log("Good bye!");
}
greet("Alie",sayGoodbye);

/*
Hello,Alie
Good bye!
 */