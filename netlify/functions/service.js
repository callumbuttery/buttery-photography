export const handler = async () => {
    console.log('hitting service');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World!',
      }),
    }
  }