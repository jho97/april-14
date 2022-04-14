// Write your solution below:

// const tshirtSorter = (shirt) => {
//     let small = ''
//     let medium = ''
//     let large = ''
    
//     for(let i=0; i < shirt.length; i++) 
//      if (shirt[i] === 's') {
//        smallMed.shift([i]) 
//        console.log(smallMed)
//      } else if (shirt[i] === 'm') {
//         smallMed.push([i])
//      } else if (shirt[i] === 'l') {
//       allSorted.push(l)
//      }
    
//   } 
// tshirtSorter('lms')
//   sml
  
  // >>> tshirtSorter('smllms')
  // ssmmll


const tshirtSorter = (shirt) => {
    let small = ''
    let medium = ''
    let large = ''
    
    for (let i=0; i < shirt.length; i++) 
     if (shirt[i] === 's') {
        small += 's' //adding the variable small with the value of 's'
        console.log(small)
     } else if (shirt[i] === 'm') {
        medium += 'm'  //adding the variable medium with the value of 'm'
        console.log(medium)
     } else if (shirt[i] === 'l') 
        large += 'l' //adding the variable large with the value of 'l'
        console.log(large)
          
    return small + medium + large
  } 
  console.log(tshirtSorter('slm'))

  // >>> tshirtSorter('lms')
  // // sml
  
  // >>> tshirtSorter('smllms')
  // ssmmll
  