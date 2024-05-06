// var num = 123456789

// var num_str = num + ""
// let res=""

// for (let i = num_str.length-1; i > -1; i--) {
//     res+=num_str[i]
// }
// console.log(+res)

//------------------------------------------------

// let arr=["sun", "mon" , "th" , "wed" , "thu" , "fri" ,"sat"];

// for(let i = 0; i<arr.length; i++){
//     if (arr[i][0]==="s"){
//         document.write("<b>"+arr[i]+"</b></br>")
//     }
//     else{
//         document.write(arr[i]+"</br>")
//     }
// }

//------------------------------------------------

// var arr = [
//     [14,10,20,26,84],
//     [10,111,96,5],
//     [14,65,41]
//     ]

// res=0

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         res+=arr[i][j]
        
//     }
// }

// console.log(res)

//------------------------------------------------

var arrSort = [12,3,1,6,2,9,2,10,4,7,5,11,8]

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let part1=mergeSort(arr.slice(0,(arr.length-arr.length%2)/2))
    let part2=mergeSort(arr.slice((arr.length-arr.length%2)/2))

    merged=[]
    i=0
    j=0
    while(true){
        if(i===part1.length){
            merged=merged.concat(part2.slice(j))
            break
        }
        if(j===part2.length){
            merged=merged.concat(part1.slice(i))
            break
        }
        if(part1[i]<part2[j]){
            merged=merged.concat(part1[i])
            i++
        } else{
            merged=merged.concat(part2[j])
            j++
        }
    }
    console.log(merged)
    return merged
}

console.log(mergeSort(arrSort))
