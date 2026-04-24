function remove(input){
    let array = input.split('');
    return array.reduce(function(accumulator, item){
        if(item !== ' '){
            accumulator.push(item);
        }
        return accumulator;
    }, []);
   
}

console.log(remove('A car, a man, a maraca.'));

