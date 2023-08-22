let array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-  ', '\r\\ ' ];
let timeOut = 100;
for(const element of array) {
  console.log(timeOut);
  setTimeout(() => {
    process.stdout.write(element);
  }, timeOut)
  timeOut = timeOut + 200
};