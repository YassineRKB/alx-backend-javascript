class AppController {
  static Home(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;
