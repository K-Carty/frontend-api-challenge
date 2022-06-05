class chitterApi {

  loadPeeps = async (callback) => {
    try { 
      const result = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      const data = await result.json();
      callback(data);
    } catch (error) {
      callback(null);
    }
  }

}


module.exports = chitterApi;