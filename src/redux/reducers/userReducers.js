import * as ActionType from "./../constants/ActionType"
let initState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    },
    {
      id: 2,
      name: "Pham Hoang Phuc",
      username: "phamHoangPhuc",
      email: "PhucPham@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    }
  ],
  userEdit: null,
  keyWord: ""
}
// const timViTri = (id) => {
//   return initState.userList.findIndex(item => {
//     return item.id === id;
//   })
// }
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.DELETE_USER:
      {
        console.log(action);
        let userList = [...state.userList];
        let index = userList.findIndex(item => {
          return item.id === action.id
        });
        userList.splice(index, 1);
        state.userList = userList;
        console.log(index)
        return { ...state }
      }
    case ActionType.SAVE_USER:
      {
        console.log(action);
        if (action.user.id) { // neu tim thay
          let userList = [...state.userList];
          let index =  userList.findIndex(item => { /// kiem id de = cach kiem index cua thang item (object) can edit
            // if id item === action id thi true - thoa dc phuong thuc index nen se gan index kiem duoc vo let index
            return item.id === action.user.id;
          })
          console.log(action.user);
          userList[index] = action.user; 
          state.userList = userList;
        }
        else {
          let user = action.user // {...action.user} tao user bang user khi thuc hien action
          user.id = Math.random();
          console.log(action)
          state.userList = [...state.userList, action.user]; // set lai state cho userlist + them mang
          return { ...state }
          //ADD
        }
        return { ...state }
      }
    case ActionType.EDIT_USER:
      {
        console.log(action);
        state.userEdit = action.user;
        return { ...state }
      }
    case ActionType.FILTER: 
    {
      state.keyWord = action.keyWord
      return {...state}
    }
    default:
      return { ...state };
  }
}
export default userReducer