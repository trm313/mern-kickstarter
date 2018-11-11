class Text {
  // Capitalize all words in string
  static toCapitalize(str) {
    str = str.toLowerCase();
    let arr = str.split();
    arr = arr.map(a => {
      return a.charAt(0).toUpperCase() + a.substr(1);
    });
    str = arr.join();
    return arr;
  }
}

export default Text;
