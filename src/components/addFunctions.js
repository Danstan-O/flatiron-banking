function validateForm(formData){
    const formDetails = {
      containsEmptyInput:false,
      hasInvalidDate:true,
      isInvalid:false
    }

    //all form fields should be filled
    for(const inputData in formData){
      if(!formData[inputData]){
        formDetails.containsEmptyInput = true
        break
      }
    }

    //date should be valid.
    const allowablePastDate = (new Date("2019")).getTime()
    const today = (new Date()).getTime()
    const formDataDate = (new Date(formData.date)).getTime()
    formDetails.hasInvalidDate = formDataDate < allowablePastDate ? true : formDataDate > today ? true : false

    //general state of validity of the form
    formDetails.isInvalid = formDetails.containsEmptyInput || formDetails.hasInvalidDate || false

    return formDetails;
  }

//export {sortTransactionList, validateForm}
export {  validateForm}