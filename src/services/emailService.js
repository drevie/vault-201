const SERVICE_CONTEXT = 'https://2tu0fcuom9.execute-api.us-east-2.amazonaws.com/prod/send-email';

export const sendEmail = (options = {}) => {
  console.log(options);

  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_CONTEXT}?email=${options.email}&name=${options.name}&inquiry=${options.inquiry}phone=${options.phone}`, {
        method: 'GET',
      })
      .then(() => resolve(true))
      .catch(() => resolve(false));
  })

}