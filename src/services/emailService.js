const SERVICE_CONTEXT = 'https://2tu0fcuom9.execute-api.us-east-2.amazonaws.com/prod/send-email';

export const sendEmail = (options = {}) => {
  console.log(options);
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
  }
  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_CONTEXT}?email=${options.email}&name=${options.name}&inquiry=${options.inquiry}phone=${options.phone}`)
      .then(() => resolve(true))
      .catch(() => resolve(false));
  })

}