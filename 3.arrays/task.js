function compareArrays(arr1, arr2) {
    return (
      arr1.length === arr2.length &&
      arr1.every((item, index) => item === arr2[index])
    );
  }
  
  function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter((user) => user.gender === gender);
    if (filteredUsers.length === 0) {
      return 0;
    }
    const sum = filteredUsers.reduce((total, user) => total + user.age, 0);
    return sum / filteredUsers.length;
  }
  
  //   function getUsersNamesInAgeRange(users, gender) {
  //     let result = 0;
  //     let sum = 0;
  //     for (let i = 0; i < users.length; i++) {
  //       if (users[i].gender === gender) {
  //         sum += users[i].age;
  //         result += 1;
  //       }
  //     }
  //     if (result === 0) {
  //       return 0;
  //     }
  //     return sum / result;
  //   }  