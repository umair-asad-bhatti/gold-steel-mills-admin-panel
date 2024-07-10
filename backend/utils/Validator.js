class Validator{
    static  string(string,min,max=Infinity){
        return string.length>=min&&string.length<=max;
    }

}
module.exports={Validator}