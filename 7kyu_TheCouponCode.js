function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
   return enteredCode === correctCode && new Date(currentDate).getTime() <= new Date(expirationDate).getTime()
}
