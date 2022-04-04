// let MarketItems = [
//     {
//         itemId: 2,
//         tokenId: 1,
//         price: 2,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {
//         itemId: 1,
//         tokenId: 1,
//         price: 2,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {

//         itemId: 3,
//         tokenId: 1,
//         price: 2,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {
//         itemId: 4,
//         tokenId: 2,
//         price: 4,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {

//         itemId: 5,
//         tokenId: 2,
//         price: 4,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {
//         itemId: 6,
//         tokenId: 3,
//         price: 4,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {
//         itemId: 7,
//         tokenId: 3,
//         price: 4,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     },
//     {
//         itemId: 8,
//         tokenId: 4,
//         price: 4,
//         nftContract: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
//         owner: '0x0000000000000000000000000000000000000000',
//         sold: false
//     }
// ]

// //console.log(MarketItems)

// //separate x into different types each belonging to an array
// let x  = [1,4,5,7,8,7,4,8,9,6,5,1]

// let y = [];

// x.forEach(xy => {
//     if (!y.includes(xy)){
//         y.push(xy)
//     }
// })

// let lat = [];

// for (let i = 0; i < y.length; i++) {
//     let dr = [];
//     let p = y[i]
//     for (let i = 0; i < x.length; i++){
//         if (x[i] === p){
//             dr.push(x[i])
//         }
//     }
//     lat.push(dr);
// }

// let tokenIds = [];
// let arrOfMarItems = [];
// let arr2 = []

// MarketItems.forEach(x => {
//     if (!tokenIds.includes(x.tokenId)){
//         tokenIds.push(x.tokenId)
//     }
// })

// for (let i = 0; i < tokenIds.length; i++){
//     let gruop = [];
//     let currentTokenId = tokenIds[i];
//     for (let i = 0; i< MarketItems.length; i++){
//         if (MarketItems[i].tokenId === currentTokenId){
//             gruop.push(MarketItems[i])
//         }
//     }
//     arrOfMarItems.push(gruop)
// }

// tokenIds.forEach(x => {
//     let group = [];
//     MarketItems.forEach(y => {
//         if (y.tokenId === x){
//             group.push(y)
//         }
//     })
// arr2.push(group)  
// })

// let items = Promise.all(arr2.map(async x => {
//     console.log(x[0])
//     console.log(x.length)
// }))

// // console.log(x)